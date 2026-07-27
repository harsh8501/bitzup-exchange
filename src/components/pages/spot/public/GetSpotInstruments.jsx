import { useState, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

export const GetSpotInstruments = () => {
  const contentRef = useRef(null);

  const [lang, setLang] = useState("HTTP");
  const [copied, setCopied] = useState(false);
  const [copiedRes, setCopiedRes] = useState(false);

  const [activeSection, setActiveSection] = useState("http");

  const HEADER_OFFSET = 120;

  const codeMap = {
    HTTP: `curl "https://api.bitget.com/api/v3/market/instruments?category=SPOT&symbol=BTCUSDT"`,
    Python: `import requests

url = "https://api.bitget.com/api/v3/market/instruments"
params = {
    "category": "SPOT",
    "symbol": "BTCUSDT"
}

response = requests.get(url, params=params)
print(response.json())`,
    Go: `package main

import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    url := "https://api.bitget.com/api/v3/market/instruments?category=SPOT&symbol=BTCUSDT"

    req, err := http.NewRequest("GET", url, nil)
    if err != nil {
        fmt.Println(err)
        return
    }

    client := &http.Client{}
    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()

    body, _ := io.ReadAll(res.Body)
    fmt.Println(string(body))
}`,
    Java: `import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class GetSpotInstrumentsDemo {
    public static void main(String[] args) throws Exception {
        String url = "https://api.bitget.com/api/v3/market/instruments?category=SPOT&symbol=BTCUSDT";

        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(url))
                .GET()
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body());
    }
}`,
    Node: `const axios = require('axios');

async function getSpotInstruments() {
    try {
        const response = await axios.get('https://api.bitget.com/api/v3/market/instruments', {
            params: { category: 'SPOT', symbol: 'BTCUSDT' }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error.message);
    }
}

getSpotInstruments();`,
  };

  const responseCode = `{
  "code": "00000",
  "msg": "success",
  "requestTime": 1770531248742,
  "data": [
    {
      "symbol": "BTCUSDT",
      "category": "SPOT",
      "baseCoin": "BTC",
      "quoteCoin": "USDT",
      "isRwa": "NO",
      "isReality": "no",
      "buyLimitPriceRatio": "0.02",
      "sellLimitPriceRatio": "0.02",
      "minOrderQty": "0.00001",
      "maxOrderQty": "0",
      "pricePrecision": "2",
      "quantityPrecision": "6",
      "quotePrecision": "8",
      "minOrderAmount": "1",
      "maxSymbolOrderNum": "",
      "maxProductOrderNum": "400",
      "status": "online",
      "maintainTime": "",
      "maxPositionNum": "200",
      "symbolType": "crypto",
      "launchTime": "1532454360000"
    }
  ]
}`;

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

  const sections = [
    "http",
    "request-params",
    "response-params",
    "request-example",
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
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid p-0">
      <div className="api-layout">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-9 col-md-8 api-content" ref={contentRef}>
            {/* Breadcrumb */}
            <div className="breadcrumb mb-4">
              <span className="kline-market">Spot</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="kline-market">Market</span>
              <span className="mx-2">
                <IoIosArrowForward className="kline-arrow" />
              </span>
              <span className="pill">Get Instruments</span>
            </div>

            {/* Title */}
            <h1 className="api-title">Get Instruments</h1>
            <div className="mb-3">
              <span className="badge bg-secondary text-light">Rate limit: 20/sec/IP</span>
            </div>
            <p className="api-desc">
              Query the specifications for online trading pair instruments.
            </p>

            {/* HTTP REQUEST */}
            <h3 className="top-req-text" id="http">
              HTTP Request
            </h3>
            <div className="http-path mb-4">
              <span className="method get">GET</span>
              <span className="path">/api/v3/market/instruments</span>
            </div>

            {/* REQUEST PARAMETERS */}
            <h3 className="top-req-text" id="request-params">
              Request Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>category</td>
                    <td>String</td>
                    <td>Yes</td>
                    <td>
                      Product type:<br/>
                      <span className="pill">SPOT</span> Spot trading<br/>
                      <span className="pill">MARGIN</span> Margin trading<br/>
                      <span className="pill">USDT-FUTURES</span> USDT futures<br/>
                      <span className="pill">COIN-FUTURES</span> Coin-M futures<br/>
                      <span className="pill">USDC-FUTURES</span> USDC futures
                    </td>
                  </tr>
                  <tr>
                    <td>symbol</td>
                    <td>String</td>
                    <td>No</td>
                    <td>Symbol name e.g., <span className="pill">BTCUSDT</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* RESPONSE PARAMETERS */}
            <h3 className="top-req-text" id="response-params">
              Response Parameters
            </h3>
            <div className="api-table-box mb-4">
              <table className="table table-striped api-table mb-0">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>code</td>
                    <td>String</td>
                    <td>Response code (e.g., <span className="pill">00000</span> for success)</td>
                  </tr>
                  <tr>
                    <td>msg</td>
                    <td>String</td>
                    <td>Response message (e.g., <span className="pill">success</span>)</td>
                  </tr>
                  <tr>
                    <td>requestTime</td>
                    <td>Number</td>
                    <td>Request timestamp in milliseconds</td>
                  </tr>
                  <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>Instruments list</td>
                  </tr>
                  <tr>
                    <td>&gt; category</td>
                    <td>String</td>
                    <td>Product type (<span className="pill">SPOT</span>, <span className="pill">MARGIN</span>, <span className="pill">USDT-FUTURES</span>, <span className="pill">COIN-FUTURES</span>, <span className="pill">USDC-FUTURES</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; symbol</td>
                    <td>String</td>
                    <td>Symbol name</td>
                  </tr>
                  <tr>
                    <td>&gt; isRwa</td>
                    <td>String</td>
                    <td>Is this an RWA Symbol (<span className="pill">YES</span> / <span className="pill">NO</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; isReality</td>
                    <td>String</td>
                    <td>Reality identifier (<span className="pill">yes</span> Reality stock token / <span className="pill">no</span> Non-Reality stock token)</td>
                  </tr>
                  <tr>
                    <td>&gt; baseCoin</td>
                    <td>String</td>
                    <td>Base coin e.g., BTC in BTCUSDT</td>
                  </tr>
                  <tr>
                    <td>&gt; quoteCoin</td>
                    <td>String</td>
                    <td>Quote coin e.g., USDT in BTCUSDT</td>
                  </tr>
                  <tr>
                    <td>&gt; buyLimitPriceRatio</td>
                    <td>String</td>
                    <td>Buy price limit ratio. The ratio of the buy limit price to the market price.</td>
                  </tr>
                  <tr>
                    <td>&gt; sellLimitPriceRatio</td>
                    <td>String</td>
                    <td>Sell price limit ratio. The ratio of the sell limit price to the market price.</td>
                  </tr>
                  <tr>
                    <td>&gt; feeRateUpRatio</td>
                    <td>String</td>
                    <td>Fee markup ratio. Percentage by which the actual fee is increased relative to base fee.</td>
                  </tr>
                  <tr>
                    <td>&gt; openCostUpRatio</td>
                    <td>String</td>
                    <td>Opening cost markup ratio. Percentage by which position opening cost is increased.</td>
                  </tr>
                  <tr>
                    <td>&gt; minOrderQty</td>
                    <td>String</td>
                    <td>Minimum order quantity in base coin.</td>
                  </tr>
                  <tr>
                    <td>&gt; maxOrderQty</td>
                    <td>String</td>
                    <td>Maximum order quantity for a single limit order in base coin. 0 indicates no limit.</td>
                  </tr>
                  <tr>
                    <td>&gt; minOrderAmount</td>
                    <td>String</td>
                    <td>Minimum order amount in quote coin.</td>
                  </tr>
                  <tr>
                    <td>&gt; pricePrecision</td>
                    <td>String</td>
                    <td>Price precision (number of decimal places allowed)</td>
                  </tr>
                  <tr>
                    <td>&gt; quantityPrecision</td>
                    <td>String</td>
                    <td>Quantity precision (number of decimal places allowed)</td>
                  </tr>
                  <tr>
                    <td>&gt; quotePrecision</td>
                    <td>String</td>
                    <td>Market order precision (number of decimal places allowed for quote coin)</td>
                  </tr>
                  <tr>
                    <td>&gt; priceMultiplier</td>
                    <td>String</td>
                    <td>Price multiplier (used for futures orders along with pricePrecision)</td>
                  </tr>
                  <tr>
                    <td>&gt; quantityMultiplier</td>
                    <td>String</td>
                    <td>Quantity multiplier (used for futures orders along with quantityPrecision)</td>
                  </tr>
                  <tr>
                    <td>&gt; type</td>
                    <td>String</td>
                    <td>Futures type (<span className="pill">perpetual</span> / <span className="pill">delivery</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; maxSymbolOrderNum</td>
                    <td>String</td>
                    <td>Maximum order number in terms of the trading pair</td>
                  </tr>
                  <tr>
                    <td>&gt; maxProductOrderNum</td>
                    <td>String</td>
                    <td>Maximum order number in terms of the product line</td>
                  </tr>
                  <tr>
                    <td>&gt; maxPositionNum</td>
                    <td>String</td>
                    <td>Maximum position number in terms of the trading pair</td>
                  </tr>
                  <tr>
                    <td>&gt; status</td>
                    <td>String</td>
                    <td>Trading pair status (<span className="pill">listed</span>, <span className="pill">online</span>, <span className="pill">limit_open</span>, <span className="pill">limit_close</span>, <span className="pill">offline</span>, <span className="pill">restrictedAPI</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; offTime</td>
                    <td>String</td>
                    <td>Trading halt time</td>
                  </tr>
                  <tr>
                    <td>&gt; limitOpenTime</td>
                    <td>String</td>
                    <td>Restricted open time</td>
                  </tr>
                  <tr>
                    <td>&gt; deliveryTime</td>
                    <td>String</td>
                    <td>Delivery time (Available only for deliveries)</td>
                  </tr>
                  <tr>
                    <td>&gt; deliveryStartTime</td>
                    <td>String</td>
                    <td>Delivery start time (Available only for deliveries)</td>
                  </tr>
                  <tr>
                    <td>&gt; deliveryPeriod</td>
                    <td>String</td>
                    <td>Delivery period (<span className="pill">this_quarter</span> / <span className="pill">next_quarter</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; launchTime</td>
                    <td>String</td>
                    <td>Launch time (Unix millisecond timestamp)</td>
                  </tr>
                  <tr>
                    <td>&gt; fundInterval</td>
                    <td>String</td>
                    <td>Funding Interval (<span className="pill">1</span> Every 1h, <span className="pill">8</span> Every 8h)</td>
                  </tr>
                  <tr>
                    <td>&gt; minLeverage</td>
                    <td>String</td>
                    <td>Minimum leverage</td>
                  </tr>
                  <tr>
                    <td>&gt; maxLeverage</td>
                    <td>String</td>
                    <td>Maximum leverage</td>
                  </tr>
                  <tr>
                    <td>&gt; maintainTime</td>
                    <td>String</td>
                    <td>Maintenance time</td>
                  </tr>
                  <tr>
                    <td>&gt; isIsolatedBaseBorrowable</td>
                    <td>String</td>
                    <td>Base coin borrowable status (Margin trading)</td>
                  </tr>
                  <tr>
                    <td>&gt; isIsolatedQuotedBorrowable</td>
                    <td>String</td>
                    <td>Quote coin borrowable status (Margin trading)</td>
                  </tr>
                  <tr>
                    <td>&gt; warningRiskRatio</td>
                    <td>String</td>
                    <td>Warning risk ratio</td>
                  </tr>
                  <tr>
                    <td>&gt; liquidationRiskRatio</td>
                    <td>String</td>
                    <td>Liquidation risk ratio</td>
                  </tr>
                  <tr>
                    <td>&gt; maxCrossedLeverage</td>
                    <td>String</td>
                    <td>Maximum leverage for cross margin</td>
                  </tr>
                  <tr>
                    <td>&gt; maxIsolatedLeverage</td>
                    <td>String</td>
                    <td>Maximum leverage for isolated margin</td>
                  </tr>
                  <tr>
                    <td>&gt; userMinBorrow</td>
                    <td>String</td>
                    <td>Minimum borrowable amount</td>
                  </tr>
                  <tr>
                    <td>&gt; areaSymbol</td>
                    <td>String</td>
                    <td>Area symbol (<span className="pill">YES</span> / <span className="pill">NO</span>)</td>
                  </tr>
                  <tr>
                    <td>&gt; makerFeeRate</td>
                    <td>String</td>
                    <td>Maker fee rate in decimal form (e.g. 0.0002 represents 0.02%)</td>
                  </tr>
                  <tr>
                    <td>&gt; takerFeeRate</td>
                    <td>String</td>
                    <td>Taker fee rate in decimal form (e.g. 0.0002 represents 0.02%)</td>
                  </tr>
                  <tr>
                    <td>&gt; maxMarketOrderQty</td>
                    <td>String</td>
                    <td>Maximum order quantity for a single market order in base coin</td>
                  </tr>
                  <tr>
                    <td>&gt; symbolType</td>
                    <td>String</td>
                    <td>Symbol Types (<span className="pill">crypto</span>, <span className="pill">metal</span>, <span className="pill">stock</span>, <span className="pill">commodity</span>)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <Link to={"/docs/spot/market/instruments-api"} className="run-btn" style={{ marginBottom: "20px" }}>RUN &gt;&gt;</Link>
            </div>

            {/* REQUEST EXAMPLE */}
            <h3 className="top-req-text" id="request-example">
              Request Example
            </h3>

            <div className="lang-tabs">
              {["HTTP", "Python", "Go", "Java", "Node"].map((t) => (
                <button
                  key={t}
                  className={lang === t ? "active" : ""}
                  onClick={() => setLang(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopy}>
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{codeMap[lang]}</pre>
            </div>

            {/* RESPONSE EXAMPLE */}
            <h3 className="top-req-text" id="response-example">
              Response Example
            </h3>
            <div className="api-code-box position-relative" style={{ marginBottom: "40px" }}>
              <button className="copy-btn" onClick={handleCopyRes}>
                {copiedRes ? <FiCheck /> : <FiCopy />}
              </button>
              <pre>{responseCode}</pre>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3 col-md-4 d-none d-md-block">
            <div className="api-sidebar">
              <ul>
                <li
                  className={activeSection === "http" ? "active" : ""}
                  onClick={() => scrollToSection("http")}
                >
                  HTTP Request
                </li>
                <li
                  className={activeSection === "request-params" ? "active" : ""}
                  onClick={() => scrollToSection("request-params")}
                >
                  Request Parameters
                </li>
                <li
                  className={activeSection === "response-params" ? "active" : ""}
                  onClick={() => scrollToSection("response-params")}
                >
                  Response Parameters
                </li>
                <li
                  className={activeSection === "request-example" ? "active" : ""}
                  onClick={() => scrollToSection("request-example")}
                >
                  Request Example
                </li>
                <li
                  className={activeSection === "response-example" ? "active" : ""}
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
  );
};

export default GetSpotInstruments;
