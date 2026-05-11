import os
import re

directory = '/Users/chaitanya/Desktop/docs/bitzup-docs-repo/src/components/pages/'
files = [f for f in os.listdir(directory) if f.endswith('Api.jsx') or f == 'placeholderApi.jsx']

def final_aggressive_cleanup(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # 1. Standardize Header/Query/Body blocks - remove any nested redundancy
    # Match any CollapsibleApiBox and clean its inner content
    def clean_inner(match):
        title = match.group(1)
        inner = match.group(2)
        # Remove any nested api-box or api-box-header or CollapsibleApiBox
        inner = re.sub(r'<(div className="api-box"|div className="api-box-header"|CollapsibleApiBox).*?>', '', inner)
        inner = re.sub(r'</(div|CollapsibleApiBox)>', '', inner) # This is too risky
        return match.group(0) # Skip for now

    # 2. TARGETED FIX FOR RESPONSES
    # This regex is very specific to the structure we want to fix
    pattern = r'<div style={{ marginTop: "64px" }}>.*?<h3.*?>Responses</h3>.*?successful operation.*?\s+</div>(?:\s+</div>)*'
    
    def repl_resp(match):
        # Extract the essential parts: the title block and the description
        m_title = re.search(r'<div className="panel-section-title".*?</div>', match.group(0), re.DOTALL)
        m_sep = re.search(r'<div style={{ height: "1px".*?</div>', match.group(0), re.DOTALL)
        m_desc = re.search(r'<p.*?>successful operation</p>', match.group(0), re.DOTALL)
        
        if m_title and m_sep and m_desc:
            return f'<div style={{ marginTop: "64px" }}>\n          <CollapsibleApiBox title="Responses">\n            {m_title.group(0)}\n            {m_sep.group(0)}\n            {m_desc.group(0)}\n          </CollapsibleApiBox>\n        </div>'
        return match.group(0)

    content = re.sub(pattern, repl_resp, content, flags=re.DOTALL)

    # 3. Clean up the Header/Query/Body blocks if they have nested api-box
    # (Matches <CollapsibleApiBox ...><div className="api-box"><div className="api-box-header">...</div><div className="tree-view">...</div></div></CollapsibleApiBox>)
    pattern_nested = r'<CollapsibleApiBox title="(.*?)">\s*(?:<div className="api-box">)?\s*(?:<div className="api-box-header">.*?</div>)?\s*(<div className="tree-view">.*?</div>)\s*(?:</div>)?\s*</CollapsibleApiBox>'
    content = re.sub(pattern_nested, r'<CollapsibleApiBox title="\1">\n          \2\n        </CollapsibleApiBox>', content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

for filename in files:
    final_aggressive_cleanup(os.path.join(directory, filename))
