import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const WsKline = () => {

    const contentRef = useRef(null);

 const [lang, setLang] = useState("Node");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

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

  
    const sections = [
      "subscribe-kline",
      "response-parameters",
      "Subscribe Example",
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
    "symbol": "BTCUSDT",
    "interval": "1"
}`;

  const responseCode = `{
  "type": "kline_latest",
  "symbol": "BTCUSDT",
  "interval": "1",
  "data": {
    "symbol": "BTCUSDT",
    "interval": "1",
    "start": 1769075940000,
    "end": 1769075999999,
    "open": 89972.7,
    "high": 89979.9,
    "low": 89967.6,
    "close": 89979.9,
    "volume": 5.226,
    "turnover": 470194.0422,
    "confirm": false,
    "ts": 1769075989192
  }
}`;

  const codeMap = {

    Python: `import websocket
import json
import threading
import time

WS_URL = "wss://socket.bitzup.com/futures/public/ws/"
SYMBOL = "BTCUSDT"
INTERVAL = "1"

def on_open(ws):
    print("Connected")

    ws.send(json.dumps({
        "action": "subscribe",
        "type": "kline",
        "symbol": SYMBOL,
        "interval": INTERVAL
    }))

    def ping():
        while True:
            time.sleep(5)
            ws.send(json.dumps({"action": "ping"}))

    threading.Thread(target=ping, daemon=True).start()

def on_message(ws, message):
    msg = json.loads(message)
    if msg.get("type") == "kline_latest":
        k = msg["data"]
        print(
            f"[{k['symbol']}] {k['interval']}m "
            f"O:{k['open']} H:{k['high']} L:{k['low']} "
            f"C:{k['close']} confirm={k['confirm']}"
        )

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
	interval := "1"

	conn, _, err := websocket.DefaultDialer.Dial(url, nil)
	if err != nil {
		panic(err)
	}
	defer conn.Close()

	// subscribe
	conn.WriteJSON(map[string]string{
		"action":   "subscribe",
		"type":     "kline",
		"symbol":   symbol,
		"interval": interval,
	})

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

		if msg["type"] == "kline_latest" {
			data := msg["data"].(map[string]interface{})
			fmt.Printf(
				"[%s] %sm O:%v H:%v L:%v C:%v confirm=%v\n",
				data["symbol"],
				data["interval"],
				data["open"],
				data["high"],
				data["low"],
				data["close"],
				data["confirm"],
			)
		}
	}
}`,

    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.WebSocket;
import java.util.concurrent.*;

public class KlineClient {

    public static void main(String[] args) throws Exception {
        String symbol = "BTCUSDT";
        String interval = "1";
        String url = "wss://socket.bitzup.com/futures/public/ws/";

        HttpClient client = HttpClient.newHttpClient();

        client.newWebSocketBuilder()
            .buildAsync(
                URI.create(url),
                new WebSocket.Listener() {

                    @Override
                    public void onOpen(WebSocket webSocket) {
                        System.out.println("Connected");

                        webSocket.sendText(
                            "{\"action\":\"subscribe\",\"type\":\"kline\",\"symbol\":\""
                                + symbol + "\",\"interval\":\"" + interval + "\"}",
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
const INTERVAL = "1";

const ws = new WebSocket(WS_URL);

ws.on("open", () => {
  console.log("Connected");

  ws.send(JSON.stringify({
    action: "subscribe",
    type: "kline",
    symbol: SYMBOL,
    interval: INTERVAL
  }));

  // keepalive ping
  setInterval(() => {
    ws.send(JSON.stringify({ action: "ping" }));
  }, 5000);
});

ws.on("message", (raw) => {
  const msg = JSON.parse(raw.toString());

  if (msg.type === "kline_latest") {
    const k = msg.data;
    console.log("kline data",k);
  }
});

ws.on("close", () => console.log("Disconnected`,
  };   

    return(
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
              <span className="pill">Kline</span>
            </div>

            {/* Title */}
            <h1 className="api-title"> Kline</h1>
            <p className="api-desc">
              Subscribe to the klines stream.
            </p>

            <div className="api-cover">USDT contract</div>

             <div className="api-info-box">
                    <div className="api-info-header">
                      <span className="api-info-icon">!</span>
                      <span className="api-info-title">INFO</span>
                    </div>
      
                    <ul className="api-info-list">
                      <li>If confirm=true, this means that the candle has closed. Otherwise, the candle is still open and updating.</li>
                    </ul>
                  </div>
            
             <h3>Available intervals:</h3>
            <ul>
              <li style={{marginBottom: '8px'}}><span className="pill">1</span> <span className="pill"> 3</span> <span className="pill"> 5</span>  <span className="pill"> 15</span> <span className="pill"> 30 </span> (min)</li>
              <li style={{marginBottom: '8px'}}><span className="pill">60</span> <span className="pill"> 120</span> <span className="pill"> 240</span>  <span className="pill"> 360</span> <span className="pill"> 720 </span> (min)</li>
              <li style={{marginBottom: '8px'}}><span className="pill"> D </span> (day)</li>
              <li style={{marginBottom: '8px'}}><span className="pill">W </span> (week)</li>
              <li style={{marginBottom: '8px'}}><span className="pill"> M </span> (month)</li>
            </ul>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="subscribe-kline">Subscribe to Kline</h3>
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
                  {"\n"} "type": "kline",
                  {"\n"} "symbol":"BTCUSDT",
                  {"\n"} "interval": "1"
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <h3 className="top-req-text" id="response-parameters">Response Parameters</h3>
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
                    <td>interval</td>
                    <td>string</td>
                    <td>Kline interval</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>array</td>
                    <td>
                     Object
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> start
                    </td>
                    <td>string</td>
                    <td>Start time of the candle (ms)</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> open
                    </td>
                    <td>string</td>
                    <td>Open price</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> high
                    </td>
                    <td>string</td>
                    <td>Highest price</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> low
                    </td>
                    <td>string</td>
                    <td>Lowest price</td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> close
                    </td>
                    <td>string</td>
                    <td>
                      Close price. Is the last traded price when the candle is
                      not closed
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> volume
                    </td>
                    <td>string</td>
                    <td>
                      Trade volume
                      <ul>
                        <li>USDT contract: unit is base coin (e.g., BTC)</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <IoIosArrowForward /> turnover
                    </td>
                    <td>string</td>
                    <td>
                      Turnover
                      <ul>
                        <li>USDT contract: unit is quote coin (e.g., USDT)</li>
                      </ul>
                    </td>
                  </tr>
                   <tr>
                    <td>
                      {'>'} confirm
                    </td>
                    <td>	boolean</td>
                    <td>
                      Whether the tick is ended or not
                    </td>
                  </tr>
                  <tr>
                    <td>
                       {'>'} ts
                    </td>
                    <td>number</td>
                    <td>
                      The timestamp (ms) of the last matched order in the candle
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

           

            {/* REQUEST EXAMPLE */}
            <h3 className="top-req-text" id="Subscribe Example">Subscribe Example</h3>

            <div className="lang-tabs">
              {["Node", "Python", "Go", "Java",].map((t) => (
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
  {"\n"}   "type": "kline_latest",
  {"\n"}   "symbol": "BTCUSDT",
  {"\n"}   "interval": "1",
  {"\n"}   "data": {"{"}
  {"\n"}   "symbol": "BTCUSDT",
  {"\n"}   "interval": "1",
  {"\n"}   "start": 1769075940000,
  {"\n"}   "end": 1769075999999,
  {"\n"}   "open": 89972.7,
  {"\n"}   "high": 89979.9,
  {"\n"}   "low": 89967.6,
  {"\n"}   "close": 89979.9,
  {"\n"}   "volume": 5.226,
  {"\n"}   "turnover": 470194.0422,
  {"\n"}   "confirm": false,
  {"\n"}   "ts": 1769075989192
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
                    className={
                      activeSection === "subscribe-kline" ? "active" : ""
                    }
                    onClick={() => scrollToSection("subscribe-kline")}
                  >
                    Subscribe to Kline
                  </li>
                  <li
                    className={
                      activeSection === "response-parameters" ? "active" : ""
                    }
                    onClick={() => scrollToSection("response-parameters")}
                  >
                    Subscribe Example
                  </li>
                  <li
                    className={
                      activeSection === "Subscribe Example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("Subscribe Example")}
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
    )
}