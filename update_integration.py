import sys
import re

with open("src/components/pages/IntegrationGuidance.jsx", "r") as f:
    orig = f.read()

# The user wants to replace the 'How To Create A Request' section with the exact GET and POST examples from the screenshots

new_request_section = """
        <h3 className="top-req-text">How To Create A Request</h3>
        <p className="api-desc mb-2">Build a payload string to be signed. The exact requirements depend on whether you are using HMAC or RSA/Ed25519 signatures.</p>

        <div className="alert-warning api-tip mb-4" style={{ backgroundColor: '#ff980020', borderLeft: '4px solid #ff9800' }}>
          <strong>NOTE:</strong>
          <ul className="mb-0 mt-2">
            <li>For GET requests, the string to sign is a concatenated string of timestamp, api_key, recvWindow, and query string.</li>
            <li>For POST requests, the string to sign is a concatenated string of timestamp, api_key, recvWindow, and JSON body string.</li>
          </ul>
        </div>

        <h5 className="top-req-text mt-3 mb-2">Signature Calculation Examples</h5>
        
        {/* GET Calculation Example */}
        <h6 className="top-req-text mb-2">GET example</h6>
        <div className="api-code-box position-relative mb-4">
          <pre>
            <code>
{`# rule:
timestamp+api_key+recv_window+queryString

# example values:
timestamp = "1658384314791"
api_key = "XXXXXXXXXX"
recv_window = "5000"
queryString = "category=option&symbol=BTC-29JUL22-25000-C"

# resulting string that needs to be signed:
"1658384314791XXXXXXXXXX5000category=option&symbol=BTC-29JUL22-25000-C"

# resulting example signature for HMAC:
"410e0f387bafb7afd0f1722c068515e09945610124fa11774da1da857b72f30b"`}
            </code>
          </pre>
        </div>

        {/* POST Calculation Example */}
        <h6 className="top-req-text mb-2">POST example</h6>
        <div className="api-code-box position-relative mb-4">
          <pre>
            <code>
{`# rule:
timestamp+api_key+recv_window+jsonBodyString

# example values:
timestamp = 1658385579423
api_key = XXXXXXXXXX
recv_window = 5000
jsonBodyString = {"category": "option"}

# resulting string that needs to be signed:
1658385579423XXXXXXXXXX5000{"category": "option"}

# resulting example signature for HMAC:
"f0da71972ce1811c882ca5e3fd1779791fb1fed499bef40e5558e50259acfd66"`}
            </code>
          </pre>
        </div>

        <h5 className="top-req-text mt-4">2. Cryptographic signature</h5>
        <p className="api-desc mb-2"><strong>Rule of HMAC: </strong><br/><code>signature = hash_hmac('sha256', payload, api_secret)</code></p>
        <p className="api-desc mb-2"><strong>Rule of RSA: </strong><br/><code>signature = rsa_signature(payload, private_key)</code></p>
        <p className="api-desc mb-4"><strong>Rule of Ed25519: </strong><br/><code>signature = ed25519_signature(payload, private_key)</code></p>

"""

# Let's replace the section:
orig = re.sub(
    r'<h3 className="top-req-text">How To Create A Request</h3>.*?<h3 className="top-req-text">REST API Base Endpoint:</h3>',
    new_request_section + '\n        <h3 className="top-req-text">REST API Base Endpoint:</h3>',
    orig,
    flags=re.DOTALL
)

# And now replace the HTTP code examples to perfectly match the screenshots.
# GET example code (from screenshot 1)
# POST example code (from screenshot 2)

new_code_map_get = """  const codeMapGet = {
    GET: `GET /v5/order/realtime?category=option&symbol=BTC-29JUL22-25000-C HTTP/1.1\\nHost: api-testnet.bybit.com\\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\\\\n-H 'X-BAPI-API-KEY: XXXXXXXXXXXXXXXXXX' \\\\\\n-H 'X-BAPI-TIMESTAMP: 1658384431891' \\\\\\n-H 'X-BAPI-RECV-WINDOW: 5000'`,
  };"""

new_code_map_post = """  const codeMapPost = {
    POST: `POST /v5/order/create HTTP/1.1\\nHost: api-testnet.bybit.com\\n-H 'X-Referer: XXXXXXXXXX' \\\\ [the header for broker users only]\\n-H 'X-BAPI-SIGN: XXXXXXXXXX' \\\\\\n-H 'X-BAPI-API-KEY: XXXXXXXXXXXXXXXXXX' \\\\\\n-H 'X-BAPI-TIMESTAMP: 1658385589135' \\\\\\n-H 'X-BAPI-RECV-WINDOW: 5000' \\\\\\n-H 'Content-Type: application/json' \\\\\\n\\n{\\n    "category": "option",\\n    "symbol": "BTC-29JUL22-25000-C",\\n    "side": "Buy",\\n    "positionIdx": 0,\\n    "orderType": "Limit",\\n    "qty": "0.1",\\n    "price": "1500",\\n    "timeInForce": "GoodTillCancel",\\n    "orderLinkId": "option-test-01"\\n}`,
  };"""


orig = re.sub(
    r'  const codeMapGet = \{.*?\n  \};',
    new_code_map_get,
    orig,
    flags=re.DOTALL
)

orig = re.sub(
    r'  const codeMapPost = \{.*?\n  \};',
    new_code_map_post,
    orig,
    flags=re.DOTALL
)

with open("src/components/pages/IntegrationGuidance.jsx", "w") as f:
    f.write(orig)

