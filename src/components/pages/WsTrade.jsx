import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const WsTrade = () => {

    const contentRef = useRef(null);

  const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedaction, setCopiedaction] = useState(false);

    const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120; // adjust to your layout

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeMap[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const handleCopyRes = async () => {
    navigator.clipboard.writeText(responseCode);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

  const handleSubscribe = async () => {
    navigator.clipboard.writeText(Subscribe);
    setCopiedRes(true);
    setTimeout(() => setCopiedRes(false), 1500);
  };

   const handleAction = async () => {
    navigator.clipboard.writeText(action);
    setCopiedaction(true);
    setTimeout(() => setCopiedaction(false), 1500);
  };

    const sections = [
      "subscribe-trade",
      "response-params",
      "response-params",
      "response-example",
    ];
  
    const scrollToSection = (id) => {
      const container = contentRef.current;
      const el = document.getElementById(id);
  
      if (!container || !el) return;
  
      const top = el.offsetTop - container.offsetTop - HEADER_OFFSET;
  
      container.scrollTo({
        top,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      if (!contentRef.current) return;
  
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          root: contentRef.current,
          rootMargin: "-30% 0px -60% 0px", // 🔥 top-biased
          threshold: 0,
        },
      );
  
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
  
      return () => observer.disconnect();
    }, []);

  const Subscribe = `{
    "action": "subscribe",
    "type": "trades",
    "symbol": "BTCUSDT"
}`;

  const action = `{
    "action": "ping",
}`;

  const responseCode = `{
  "type": "trade",
  "symbol": "BTCUSDT",
  "data": {
    "trade_id": "7d0da08b-9dcf-5300-9264-b7fdbf91b586",
    "price": 89657.7,
    "size": 0.002,
    "side": "Sell",
    "direction": "PlusTick",
    "ts": 1769146500397
  }
}`;

  const codeMap = {
    Python: `import websocket
import json
import threading
import time

WS_URL = "wss://socket.bitzup.com/futures/public/ws/"
SYMBOL = "BTCUSDT"

def on_open(ws):
    print("Connected")

    ws.send(json.dumps({
        "action": "subscribe",
        "type": "trades",
        "symbol": SYMBOL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({"action": "ping"}))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)
    if msg.get("type") == "trade":
        t = msg["data"]
        print(f"[{msg['symbol']}] {t['side']} {t['size']} @ {t['price']} ({t['trade_id']})")

def on_error(ws, error):
    print("Error:", error)

def on_close(ws):
    print("Disconnected")

ws = websocket.WebSocketApp(
    WS_URL,
    on_open=on_open,
    on_message=on_message,
    on_error=on_error,
    on_close=on_close
)

ws.run_forever()`,

    Go: `package main

import (
	"fmt"
	"time"

	"github.com/gorilla/websocket"
)

func main() {
	url := "wss://socket.bitzup.com/futures/public/ws/"
	symbol := "BTCUSDT"

	conn, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	sub := map[string]string{
		"action": "subscribe",
		"type":   "trades",
		"symbol": symbol,
	}
	conn.WriteJSON(sub)

	// keepalive ping
	go func() {
		for {
			time.Sleep(5 * time.Second)
			conn.WriteJSON(map[string]string{"action": "ping"})
		}
	}()

	for {
		var msg map[string]interface{}
		if err := conn.ReadJSON(&msg); err != nil {
			panic(err)
		}

		if msg["type"] == "trade" {
			data := msg["data"].(map[string]interface{})
			fmt.Printf("[%s] %s %v @ %v (%s)\n",
				msg["symbol"],
				data["side"],
				data["size"],
				data["price"],
				data["trade_id"],
			)
		}
	}
}`,

    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class TradesClient {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";
        String url = "wss://socket.bitzup.com/futures/public/ws/";

        HttpClient client = HttpClient.newHttpClient();

        WebSocket ws = client.newWebSocketBuilder()
            .buildAsync(
                URI.create(url),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{\"action\":\"subscribe\",\"type\":\"trades\",\"symbol\":\"" + symbol + "\"}",
                            true
                        );

                        ScheduledExecutorService scheduler =
                            Executors.newSingleThreadScheduledExecutor();

                        scheduler.scheduleAtFixedRate(() ->
                            webSocket.sendText("{\"action\":\"ping\"}", true),
                            5, 5, TimeUnit.SECONDS
                        );

                        WebSocket.Listener.super.onOpen(webSocket);
                    }

                    @Override
                    public CompletionStage<?> onText(WebSocket webSocket, CharSequence data, boolean last) {
                        System.out.println("Message: " + data);
                        return WebSocket.Listener.super.onText(webSocket, data, last);
                    }
                }
            ).join();

        Thread.sleep(Long.MAX_VALUE);
    }
}`,

    Node: `const WebSocket = require("ws");

const WS_URL = "wss://socket.bitzup.com/futures/public/ws/";
const SYMBOL = "BTCUSDT";

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "trades",
    symbol: SYMBOL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data.toString());

  if (msg.type === "trade") {
    const t = msg.data;
    console.log("data",t);
  }
});

ws.on("close", () => console.log("Disconnected"));
ws.on("error", console.error);`,
  };

  return (
    <>
      <div className="container-fluid p-0">
        <div className="api-layout">
          <div className="row">
            {/* LEFT CONTENT */}
            <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
              {/* Breadcrumb */}
              <div className="breadcrumb mb-4">
                <span className="kline-market">WebSocket Stream</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="kline-market">Public</span>
                <span className="mx-2">
                  <IoIosArrowForward className="kline-arrow" />
                </span>
                <span className="pill">Trade</span>
              </div>

              {/* Title */}
              <h1 className="api-title"> Trade</h1>
              <p className="api-desc">Subscribe to the recent trades stream.</p>

              <div className="api-cover">USDT contract</div>

              {/* HTTP REQUEST */}
              <h3 className="top-req-text" id="subscribe-trade">Subscribe to Trade</h3>
              <p>Client → Server</p>
              <p>Notes: </p>
              <ul>
                <li>symbol, like BTCUSDT, uppercase only</li>
              </ul>
              <div className="api-code-box position-relative">
                <button className="copy-btn" onClick={handleSubscribe}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  <code>
                    {"{"}
                    {"\n"} "action": "subscribe",
                    {"\n"} "type": "trades",
                    {"\n"} "symbol": "BTCUSDT"
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

              <p>Keepalive (Ping) </p>
              <ul>
                <li>
                  Clients must send a ping periodically to keep the connection
                  alive.
                </li>
                <li>Recommended interval: every 5 seconds</li>
              </ul>
              <div className="api-code-box position-relative">
                <button className="copy-btn" onClick={handleAction}>
                  {copiedaction ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  <code>
                    {"{"}
                    {"\n"} "action": "ping"
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>

              <h3 className="top-req-text" id="response-params">Response Parameters</h3>
              <div className="api-table-box">
                <table className="table table-striped api-table mb-0">
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Type</th>
                      <th>Comments</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>type</td>
                      <td>string</td>
                      <td>Message type</td>
                    </tr>
                    <tr>
                      <td>symbol</td>
                      <td>string</td>
                      <td>Symbol name</td>
                    </tr>

                    <tr>
                      <td>data</td>
                      <td>object</td>
                      <td>Orderbook data</td>
                    </tr>
                    <tr>
                      <td>{">"} trade_id</td>
                      <td>string</td>
                      <td>Trade ID</td>
                    </tr>
                    <tr>
                      <td>{">"} price</td>
                      <td>string</td>
                      <td>Trade price</td>
                    </tr>
                    <tr>
                      <td>{">"} size</td>
                      <td>string</td>
                      <td>Trade size</td>
                    </tr>
                    <tr>
                      <td>{">"} side</td>
                      <td>string</td>
                      <td>Side of taker. Buy,Sell</td>
                    </tr>
                    <tr>
                      <td>
                        <Link style={{color: '#2edbad', textDecoration:'none'}} to="/docs/enums">{">"} direction</Link>
                      </td>
                      <td>string</td>
                      <td>Direction of price change</td>
                    </tr>
                    <tr>
                      <td>{">"} ts</td>
                      <td>number</td>
                      <td>The timestamp (ms) that the order is filled</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* REQUEST EXAMPLE */}
              <h3 className="top-req-text" id="subscribe-example">Subscribe Example</h3>

              <div className="lang-tabs">
                {["Node", "Python", "Go", "Java"].map((t) => (
                  <button
                    key={t}
                    className={lang === t ? "active" : ""}
                    onClick={() => setLang(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="api-code-box position-relative">
                {/* COPY ICON */}
                <button className="copy-btn" onClick={handleCopy}>
                  {copied ? <FiCheck /> : <FiCopy />}
                </button>

                <pre>
                  <code>{codeMap[lang]}</code>
                </pre>
              </div>

              {/* RESPONSE EXAMPLE */}
              <h3 className="top-req-text" id="response-example">Response Example</h3>
              <div className="api-code-box position-relative">
                <button className="copy-btn" onClick={handleCopyRes}>
                  {copiedRes ? <FiCheck /> : <FiCopy />}
                </button>
                <pre>
                  <code>
                    {"{"}
                    {"\n"} "type": "trade",
                    {"\n"} "symbol": "BTCUSDT",
                    {"\n"} "data": {"{"}
                    {"\n"} "trade_id": "7d0da08b-9dcf-5300-9264-b7fdbf91b586",
                    {"\n"} "price": 89657.7,
                    {"\n"} "size": 0.002,
                    {"\n"} "side": "Sell",
                    {"\n"} "direction": "PlusTick",
                    {"\n"} "ts": 1769146500397
                    {"\n"} {"}"}
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-3 col-md-4 d-none d-md-block">
              <div className="api-sidebar">

                <ul>
                  <li
                    className={activeSection === "subscribe-trade" ? "active" : ""}
                    onClick={() => scrollToSection("subscribe-trade")}
                  >
                    Subscribe to Trade
                  </li>
                  <li
                    className={
                      activeSection === "response-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-params")}
                  >
                    Response Parameters
                  </li>
                  <li
                    className={
                      activeSection === "subscribe-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("subscribe-example")}
                  >
                    Subscribe Example
                  </li>
                  <li
                    className={
                      activeSection === "response-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-example")}
                  >
                    Response Example
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
