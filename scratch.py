import json
import re

# Read data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract mockPresentations array
match = re.search(r'const mockPresentations = (\[.*?\]);', content, re.DOTALL)
if not match:
    print("Error parsing")
    exit(1)

presentations = json.loads(match.group(1))

# Define the new sessions and exact order
order = [
    # Session 1: Science, Math, IT
    ("p_5", 1), ("p_34", 1), ("p_20", 1), ("p_25", 1), ("p_39", 1),
    ("p_14", 1), ("p_37", 1), ("p_15", 1), ("p_28", 1), ("p_8", 1),
    ("p_42", 1), ("p_11", 1), ("p_36", 1), ("p_32", 1), ("p_33", 1),

    # Session 2: Arts, Music, Design
    ("p_13", 2), ("p_27", 2), ("p_45", 2), ("p_43", 2), ("p_16", 2),
    ("p_50", 2), ("p_55", 2), ("p_4", 2), ("p_7", 2), ("p_22", 2),
    ("p_44", 2), ("p_9", 2), ("p_48", 2), ("p_57", 2), ("p_1", 2),

    # Session 3: Finance, Economy, Society
    ("p_3", 3), ("p_38", 3), ("p_46", 3), ("p_26", 3), ("p_29", 3),
    ("p_12", 3), ("p_54", 3), ("p_51", 3), ("p_2", 3), ("p_52", 3),
    ("p_21", 3), ("p_30", 3), ("p_24", 3),

    # Session 4: Languages & Sports
    ("p_23", 4), ("p_49", 4), ("p_18", 4), ("p_19", 4), ("p_41", 4),
    ("p_47", 4), ("p_31", 4), ("p_56", 4), ("p_53", 4), ("p_6", 4),
    ("p_17", 4), ("p_10", 4), ("p_40", 4), ("p_35", 4)
]

new_presentations = []
for p_id, session in order:
    # Find the presentation
    p = next((x for x in presentations if x["id"] == p_id), None)
    if p:
        p["session"] = session
        new_presentations.append(p)

# Create the new array string with 2 spaces indent
new_array_str = json.dumps(new_presentations, indent=2, ensure_ascii=False)

# Replace in content
new_content = content[:match.start(1)] + new_array_str + content[match.end(1):]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done!")
