import { useState, useEffect, useRef  } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FiCopy, FiCheck } from "react-icons/fi";

export const Tickers = () => {

  const contentRef = useRef(null);

      const [lang, setLang] = useState("HTTP");
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
    
      const responseCode = `{
  "status": "1",
  "message": "SUCCESS",
  "data": {
    "symbol": "BTCUSDT",
    "last_price": "88555.20",
    "index_price": "88605.50",
    "mark_price": "88558.68",
    "prev_price_24h": "91141.60",
    "change_24h": "-0.028377",
    "high_price_24h": "91339.00",
    "low_price_24h": "87773.10",
    "prev_price_1h": "89231.40",
    "open_interest": "51973.674",
    "funding_rate": "0.00003285",
    "next_funding_time": "1769011200000",
    "turn_over_24h": "7526525461.7731",
    "volume_24h": "84047.7230"
  }
}`;
    
      const codeMap = {
        HTTP: `GET /v1/get-ticker?symbol=BTCUSDT HTTP/1.1
    Host: https://api.bitzup.com/futures/api`,
    
        Python: `import requests
    
    url = "https://api.bitzup.com/futures/api/v1/get-ticker"
    
    params = {
        "symbol": "BTCUSDT",
    }
    
    try:
        response = requests.get(url, params=params, timeout=10)
        response.raise_for_status()
        print(response.json())
    except requests.exceptions.HTTPError:
        print("API Error:", response.text)
    except requests.exceptions.RequestException as e:
        print("Network Error:", str(e))`,
    
        Go: `package main
    
    import (
        "fmt"
        "io"
        "net/http"
        "net/url"
        "time"
    )
    
    func main() {
        baseURL := "https://api.bitzup.com/futures/api/v1/get-ticker"
    
        params := url.Values{}
        params.Add("symbol", "BTCUSDT")
    
        reqURL := baseURL + "?" + params.Encode()
    
        client := &http.Client{
            Timeout: 10 * time.Second,
        }
    
        req, err := http.NewRequest("GET", reqURL, nil)
        if err != nil {
            panic(err)
        }
    
        resp, err := client.Do(req)
        if err != nil {
            panic(err)
        }
        defer resp.Body.Close()
    
        body, _ := io.ReadAll(resp.Body)
    
        if resp.StatusCode != http.StatusOK {
            fmt.Println("API Error:", string(body))
            return
        }
    
        fmt.Println(string(body))
    }`,
    
        Java: `import java.net.URI;
    import java.net.URLEncoder;
    import java.net.http.HttpClient;
    import java.net.http.HttpRequest;
    import java.net.http.HttpResponse;
    import java.nio.charset.StandardCharsets;
    import java.time.Duration;
    
    public class OrderBookExample {
    
        public static void main(String[] args) throws Exception {
            String baseUrl = "https://api.bitzup.com/futures/api/v1/get-ticker";
    
            String query = String.format(
                "symbol=%s",
                encode("BTCUSDT"),
            );
    
            HttpClient client = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    
            HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(baseUrl + "?" + query))
                .timeout(Duration.ofSeconds(10))
                .GET()
                .build();
    
            HttpResponse<String> response =
                client.send(request, HttpResponse.BodyHandlers.ofString());
    
            if (response.statusCode() != 200) {
                System.out.println("API Error: " + response.body());
                return;
            }
    
            System.out.println(response.body());
        }
    
        private static String encode(String value) {
            return URLEncoder.encode(value, StandardCharsets.UTF_8);
        }
    }`,
    
        Node: `const axios = require("axios");
    
    async function getTickers() {
      try {
        const response = await axios.get(
          "https://api.bitzup.com/futures/api/v1/get-ticker",
          {
            params: {
              symbol: "BTCUSDT",
           
            },
            timeout: 10000,
          }
        );
    
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          console.error("API Error:", err.response.data);
        } else {
          console.error("Network Error:", err.message);
        }
      }
    }
    
    getTickers();`,
      };
    return(
        <>
           <div className="container-fluid p-0">
             <div className="api-layout">
                   <div className="row">
                     {/* LEFT CONTENT */}
                     <div className="col-lg-9 col-md-12 api-content" ref={contentRef}>
                       {/* Breadcrumb */}
                       <div className="breadcrumb mb-4">
                         <span className="kline-market">Market</span>
                         <span className="mx-2 ">
                           <IoIosArrowForward className="kline-arrow" />
                         </span>
                         <span className="pill">Get Tickers</span>
                       </div>
           
                       {/* Title */}
                       <h1 className="api-title"> Get Tickers</h1>
                       <p className="api-desc">Query for the latest price snapshot and trading volume in the last 24 hours.</p>
           
                       <div className="api-cover">USDT contract</div>
                       <div className="api-info-box">
                         <div className="api-info-header">
                           <span className="api-info-icon">!</span>
                           <span className="api-info-title">INFO</span>
                         </div>
           
                         <ul className="api-info-list">
                           <li>The response is in the snapshot format.</li>
                          
                         </ul>
                       </div>
           
                       {/* HTTP REQUEST */}
                       <h3 className="top-req-text" id="http">HTTP Request</h3>
                       <div className="http-path">
                         <span className="method">GET</span>
                         <span className="path">/v1/get-ticker</span>
                       </div>
           
                       {/* REQUEST PARAMETERS */}
                       <h3 className="top-req-text" id="request-params">Request Parameters</h3>
                       <div className="api-table-box">
                         <table className="table table-striped api-table mb-0">
                           <thead>
                             <tr>
                               <th>Parameter</th>
                               <th>Required</th>
                               <th>Type</th>
                               <th>Comments</th>
                             </tr>
                           </thead>
                           <tbody>
                             <tr>
                               <td className="text-interval">symbol</td>
                               <td>true</td>
                               <td>string</td>
                               <td>
                                 Symbol name, like
                                 <span className="pill">BTCUSDT</span>, uppercase only
                               </td>
                             </tr>
                            
                           </tbody>
                         </table>
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
                               <td>symbol</td>
                               <td>string</td>
                               <td>Symbol name</td>
                             </tr>
                             <tr>
                               <td>last_price</td>
                               <td>string</td>
                               <td>Last price</td>
                             </tr>
                             <tr>
                               <td>index_price</td>
                               <td>string</td>
                               <td>Index price</td>
                             </tr>

                             <tr>
                               <td>mark_price</td>
                               <td>string</td>
                               <td>Mark price</td>
                             </tr>

                             <tr>
                               <td>prev_price_24h</td>
                               <td>string</td>
                               <td>Market price 24 hours ago</td>
                             </tr>

                             <tr>
                               <td>change_24h</td>
                               <td>string</td>
                               <td>Percentage change of market price relative to 24h</td>
                             </tr>

                              <tr>
                               <td>high_price_24h</td>
                               <td>string</td>
                               <td>The highest price in the last 24 hours</td>
                             </tr>

                              <tr>
                               <td>low_price_24h</td>
                               <td>string</td>
                               <td>The lowest price in the last 24 hours</td>
                             </tr>

                             <tr>
                               <td>prev_price_1h</td>
                               <td>string</td>
                               <td>Market price an hour ago</td>
                             </tr>

                             <tr>
                               <td>open_interest</td>
                               <td>string</td>
                               <td>Open interest size</td>
                             </tr>

                             <tr>
                               <td>funding_rate</td>
                               <td>string</td>
                               <td>Funding rate</td>
                             </tr>

                             <tr>
                               <td>next_funding_time</td>
                               <td>string</td>
                               <td>Next funding time (ms)</td>
                             </tr>

                             <tr>
                               <td>turn_over_24h</td>
                               <td>string</td>
                               <td>Turnover for 24h</td>
                             </tr>

                             <tr>
                               <td>volume_24h</td>
                               <td>string</td>
                               <td>Volume for 24h</td>
                             </tr>
                             
                             
                           </tbody>
                         </table>
                       </div>
           
                       {/* REQUEST EXAMPLE */}
                       <h3 className="top-req-text" id="request-example">Request Example</h3>
           
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
  {"\n"}  "status": "1",
  {"\n"}  "message": "SUCCESS",
  {"\n"}  "data": {"{"}
  {"\n"}    "symbol": "BTCUSDT",
  {"\n"}    "last_price": "88555.20",
  {"\n"}    "index_price": "88605.50",
  {"\n"}    "mark_price": "88558.68",
  {"\n"}    "prev_price_24h": "91141.60",
  {"\n"}    "change_24h": "-0.028377",
  {"\n"}    "high_price_24h": "91339.00",
  {"\n"}    "low_price_24h": "87773.10",
  {"\n"}    "prev_price_1h": "89231.40",
  {"\n"}    "open_interest": "51973.674",
  {"\n"}    "funding_rate": "0.00003285",
  {"\n"}    "next_funding_time": "1769011200000",
  {"\n"}    "turn_over_24h": "7526525461.7731",
  {"\n"}    "volume_24h": "84047.7230"
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
                    className={activeSection === "http" ? "active" : ""}
                    onClick={() => scrollToSection("http")}
                  >
                    HTTP Request
                  </li>
                  <li
                    className={
                      activeSection === "request-params" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-params")}
                  >
                    Request Parameters
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
                      activeSection === "request-example" ? "active" : ""
                    }
                    onClick={() => scrollToSection("request-example")}
                  >
                    Request Example
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