import os

directory = '/Users/chaitanya/Desktop/docs/bitzup-docs-repo/src/components/pages/'
files = [f for f in os.listdir(directory) if f.endswith('Api.jsx') or f == 'placeholderApi.jsx']

def cleanup_extra_divs(filepath):
    with open(filepath, 'r') as f:
        lines = f.readlines()
    
    new_lines = []
    i = 0
    while i < len(lines):
        line = lines[i]
        if '</CollapsibleApiBox>' in line:
            new_lines.append(line)
            # Check if next line is a redundant </div>
            if i + 1 < len(lines):
                next_line = lines[i+1]
                if next_line.strip() == '</div>' and (len(line) - len(line.lstrip()) == len(next_line) - len(next_line.lstrip())):
                    print(f"Removed extra div in {filepath} at line {i+2}")
                    i += 1 # Skip the extra div
        else:
            new_lines.append(line)
        i += 1
        
    with open(filepath, 'w') as f:
        f.writelines(new_lines)

for filename in files:
    cleanup_extra_divs(os.path.join(directory, filename))
