import csv
import json

presentations = []
seen = set()

# Read the CSV file
with open('/Users/valerie/Desktop/Canvas/自主學習報告3/students_reports_template.csv', mode='r', encoding='utf-8-sig') as f:
    reader = csv.reader(f)
    header = next(reader) # Read header
    
    for row in reader:
        if not row or len(row) < 4:
            continue
        
        clazz = row[0].strip()
        seat = row[1].strip()
        name = row[2].strip()
        topic = row[3].strip()
        
        # Skip empty rows or headers repeated
        if clazz == '班級' or not clazz or not topic:
            continue
            
        key = (clazz, topic)
        if key in seen:
            # We already have this presentation. We should find it and append the student name to it
            for p in presentations:
                if p['class'] == clazz and p['topic'] == topic:
                    # check if name already exists in presenters
                    if name not in p['presenters']:
                        p['presenters'].append(f"{name} ({seat})")
            continue
        
        seen.add(key)
        presentations.append({
            'class': clazz,
            'topic': topic,
            'presenters': [f"{name} ({seat})"],
            'comment': '',
            'status': 'pending',
            'session': 1 # will distribute below
        })

# Now distribute presentations into 4 sessions roughly equally
# Total presentations:
total = len(presentations)
print(f"Total deduplicated presentations: {total}")

# Distribute
for i, p in enumerate(presentations):
    # distribute 1 to 4
    session = (i % 4) + 1
    p['session'] = session
    # Format presenters as string
    p['presenter_names'] = f"[{p['class']}] " + ", ".join(p['presenters'])
    # Assign a unique ID
    p['id'] = f"p_{i+1}"

# Let's clean up fields
final_presentations = []
for p in presentations:
    final_presentations.append({
        'id': p['id'],
        'topic': p['topic'],
        'presenters': p['presenter_names'],
        'session': p['session'],
        'status': p['status'],
        'comment': p['comment']
    })

# Write to data.js
js_content = f"""const mockPresentations = {json.dumps(final_presentations, ensure_ascii=False, indent=2)};

function getPresentations() {{
  const stored = localStorage.getItem('presentations');
  if (stored) {{
    return JSON.parse(stored);
  }}
  localStorage.setItem('presentations', JSON.stringify(mockPresentations));
  return mockPresentations;
}}

function savePresentations(data) {{
  localStorage.setItem('presentations', JSON.stringify(data));
}}

function getFeedbacks() {{
  const stored = localStorage.getItem('feedbacks');
  return stored ? JSON.parse(stored) : getMockFeedbacks();
}}

function getMockFeedbacks() {{
  const mockFbs = [
    {{
      id: 'fb_1',
      studentName: '1001 林小明',
      session: '1',
      topic: '分析NBA隊伍擴建',
      content: '我覺得這個報告的數據分析做得非常詳細，尤其是各個城市的市場潛力評估，讓我學到了如何把地理和經濟結合在一起。',
      timestamp: '2026/5/25 上午9:15:30'
    }},
    {{
      id: 'fb_2',
      studentName: '1002 陳美美',
      session: '1',
      topic: '投資理財',
      content: '他們介紹的複利效應和簡單理財工具很實用，圖表畫得很好，淺顯易懂，對我們高中生很有幫助！',
      timestamp: '2026/5/25 上午9:20:12'
    }}
  ];
  localStorage.setItem('feedbacks', JSON.stringify(mockFbs));
  return mockFbs;
}}

function saveFeedback(feedback) {{
  const feedbacks = getFeedbacks();
  feedbacks.push(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
}}
"""

with open('/Users/valerie/Desktop/Canvas/自主學習報告3/data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)
print("Successfully generated data.js")
