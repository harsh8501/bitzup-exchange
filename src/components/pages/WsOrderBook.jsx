import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const WsOrderBook = () => {

    const contentRef = useRef(null);

  const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);
  const [copiedAction, setCopiedAction] = useState(false);

  const [activeSection, setActiveSection] = useState("depths");

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
    setCopiedAction(true);
    setTimeout(() => setCopiedAction(false), 1500);
  };

  const sections = [
    "depths",
    "subscribe-orderbook",
    "response-params",
    "subscribe-example",
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
  "type": "orderbook",
  "symbol": "BTCUSDT"
}`;

    const action = `{
  "action": "ping",
}`;

  const responseCode = `{
  "type": "orderbook",
  "symbol": "BTCUSDT",
  
  "data": {
    "asks": [
      ["43126.00", "0.310"],
      ["43126.50", "0.880"]
    ],
    "bids": [
      ["43125.50", "0.240"],
      ["43125.00", "1.120"]
    ]
    "ts": 1705840123456,
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
        "type": "orderbook",
        "symbol": SYMBOL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({ "action": "ping" }))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)

    if msg.get("type") == "orderbook":
        asks = msg["data"]["asks"]
        bids = msg["data"]["bids"]

        print("Top Ask:", asks[0])
        print("Top Bid:", bids[0])

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
	"encoding/json"
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
		"type":   "orderbook",
		"symbol": symbol,
	}

	conn.WriteJSON(sub)

	// ping loop
	go func() {
		for {
			time.Sleep(5 * time.Second)
			conn.WriteJSON(map[string]string{"action": "ping"})
		}
	}()

	for {
		var msg map[string]interface{}
		err := conn.ReadJSON(&msg)
		if err != nil {
			panic(err)
		}

		if msg["type"] == "orderbook" {
			fmt.Println("Orderbook:", msg)
		}
	}
}`,

    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class BitzupOrderbook {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";

        HttpClient client = HttpClient.newHttpClient();

        WebSocket ws = client.newWebSocketBuilder()
            .buildAsync(
                URI.create("wss://socket.bitzup.com/futures/public/ws/"),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{\"action\":\"subscribe\",\"type\":\"orderbook\",\"symbol\":\"" + symbol + "\"}",
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

const symbol = "BTCUSDT";
const ws = new WebSocket("wss://socket.bitzup.com/futures/public/ws/");

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "orderbook",
    symbol
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (data) => {
  const msg = JSON.parse(data);

  if (msg.type === "orderbook") {
    const asks = msg.data.asks;
    const bids = msg.data.bids;

    console.log("Top Ask:", asks[0]);
    console.log("Top Bid:", bids[0]);
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
              <span className="pill">Orderbook</span>
            </div>

            {/* Title */}
            <h1 className="api-title"> Orderbook</h1>
            <p className="api-desc">
              Subscribe to the orderbook stream. Supports different depths.
            </p>

            <div className="api-cover">USDT contract</div>

            <h3 className="top-req-text" id="depths">Depths</h3>
            <p className="api-desc">Default : Level 20 data, push frequency: <b> 200ms</b></p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="subscribe-orderbook">Subscribe to Orderbook</h3>
            <p>Client → Server</p>
             <p>Notes: </p>
             <ul>
              <li>symbol, like BTCUSDT, uppercase only</li>
              <li>Default depth is 20 levels per sides</li>
              <li>No depth parameter is required on the client</li>
             </ul>
            <div className="api-code-box position-relative">
              <button className="copy-btn" onClick={handleSubscribe}>
                {copiedRes ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>
                <code>
                  {"{"}
                  {"\n"} "action": "subscribe",
                  {"\n"} "type": "orderbook",
                  {"\n"} "symbol": "BTCUSDT"
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <p>Keepalive (Ping) </p>
             <ul>
              <li>Clients must send a ping periodically to keep the connection alive.</li>
              <li>Recommended interval: every 5 seconds</li>
             </ul>
            <div className="api-code-box position-relative">
              <button className="copy-btn" onClick={handleAction}>
                {copiedAction ? <FiCheck /> : <FiCopy />}
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
                    <td>{'>'} bids</td>
                    <td>array</td>
                    <td>Bid, buyer. Sorted by price in descending order</td>
                  </tr>
                  <tr>
                    <td>{'>>'} b[0]</td>
                    <td>string</td>
                    <td>Bid price</td>
                  </tr>
                  <tr>
                    <td>
                      {'>>'} b[1]
                    </td>
                    <td>string</td>
                    <td>Bid size</td>
                  </tr>
                  <tr>
                    <td>
                      {'>'} asks
                    </td>
                    <td>array</td>
                    <td>Ask, seller. Sorted by price in ascending order</td>
                  </tr>
                  <tr>
                    <td>
                      {'>>'} a[0]
                    </td>
                    <td>string</td>
                    <td>Ask price</td>
                  </tr>
                  <tr>
                    <td>
                      {'>>'} a[1]
                    </td>
                    <td>string</td>
                    <td>Ask size</td>
                  </tr>
                  <tr>
                    <td> {'>'} ts</td>
                    <td>number</td>
                    <td>The timestamp (ms) that the system generates the data</td>
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
  {"\n"}  "type": "orderbook",
  {"\n"}  "symbol": "BTCUSDT",
  
  {"\n"}  "data": {"{"}
  {"\n"}    "asks": [
  {"\n"}      [
  {"\n"}        "43126.00",
  {"\n"}        "0.310"
  {"\n"}      ],
  {"\n"}      [
  {"\n"}        "43126.50",
  {"\n"}        "0.880"
  {"\n"}      ]
  {"\n"}    ],
  {"\n"}    "bids": [
  {"\n"}      [
  {"\n"}        "43125.50",
  {"\n"}        "0.240"
  {"\n"}      ],
  {"\n"}      [
  {"\n"}        "43125.00",
  {"\n"}        "1.120"
  {"\n"}      ]
  {"\n"}    ]
  {"\n"}  "ts": 1705840123456,
  {"\n"}  {"}"}
  {"\n"}{"}"}
</code>

              </pre>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 col-md-4 d-none d-md-block">
            <div className="api-sidebar">
              <ul>
                  <li
                    className={activeSection === "depths" ? "active" : ""}
                    onClick={() => scrollToSection("depths")}
                  >
                    Depths
                  </li>
                  <li
                    className={
                      activeSection === "subscribe-orderbook" ? "active" : ""
                    }
                    onClick={() => scrollToSection("subscribe-orderbook")}
                  >
                    Subscribe to Orderbook
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
