const mockPresentations = [
  {
    "id": "p_1",
    "topic": "踢踏舞比賽準備歷程與自主訓練管理",
    "presenters": "[1001] 王昊祐 (1)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_43",
    "topic": "琴、音樂與我的自我救贖",
    "presenters": "[1002] 涂維凱 (22)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_27",
    "topic": "自學Bach Partita No.3",
    "presenters": "[1002] 王湧碩 (3)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_41",
    "topic": "日文自學",
    "presenters": "[1002] 賴泓劭 (20)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_19",
    "topic": "N5日文養成中",
    "presenters": "[1001] 陳妍熹 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779857951299_57",
    "topic": "日文自學",
    "presenters": "[1002] 蔡侑庭 (40)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_31",
    "topic": "西語",
    "presenters": "[1002] 沈稚荏 (7)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_13",
    "topic": "俄文學習",
    "presenters": "[1001] 蘇雋博 (20)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_48",
    "topic": "學習英文",
    "presenters": "[1002] 陳希 (31), [1002] 陳莘棠 (34)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_23",
    "topic": "準備雅思",
    "presenters": "[1001] 錢安婕 (43)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_18",
    "topic": "SAT準備",
    "presenters": "[1001] 張采庭 (35)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779857951299_54",
    "topic": "從MBTI熱潮看現代人的自我認同與社交心理學",
    "presenters": "[1002] 陳意喬 (35)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_54",
    "topic": "立法精神及修正",
    "presenters": "[1002] 劉家安 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_46",
    "topic": "影像剪輯學習",
    "presenters": "[1002] 張心妮 (30), [1002] 潘柔涵 (39)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_51",
    "topic": "透過影視作品看社會議題",
    "presenters": "[1002] 陳宣竹 (33)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_21",
    "topic": "自然專題-乾旱壓力對植物氣孔關閉動力學與壓力記憶之研究",
    "presenters": "[1001] 陳宜宏 (14), [1001] 吳育宣 (28), [1001] 陳子甯 (36)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_20",
    "topic": "探索數學奧妙",
    "presenters": "[1002] 范騰云 (10), [1002] 陳柏霖 (17), [1002] 廖振玹 (18)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_29",
    "topic": "冷次定律與渦電流煞車的定量研究",
    "presenters": "[1001] 江安妤 (26), [1001] 沈毓庭 (29), [1002] 郭聿安 (13)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_33",
    "topic": "考試作弊神器—學習物聯網應用、軟體編程及AI運用",
    "presenters": "[1002] 柳兆剛 (9)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_15",
    "topic": "不同水質對生植物生長與發芽表現之影響探討",
    "presenters": "[1001] 張廷愷 (11), [1001] 楊明叡 (16), [1002] 謝詠煜 (21)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_8",
    "topic": "黏菌馴化實驗",
    "presenters": "[1002] 吉諺揚 (4), [1002] 謝雨萱 (43)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_25",
    "topic": "公式證明及解難題",
    "presenters": "[1002] 王宇珩 (1)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_32",
    "topic": "從零開始設計遊戲",
    "presenters": "[1002] 邱植安 (8)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_31",
    "topic": "解剖學",
    "presenters": "[1001] 林詠潔 (31), [1001] 楊佑澧 (42)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_11",
    "topic": "科學與跑步的關係",
    "presenters": "[1001] 林紘安 (8), [1001] 賴煜翔 (19)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_9",
    "topic": "十字翻轉棋",
    "presenters": "[1001] 李建頡 (5), [1001] 張依璇 (34)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_46",
    "topic": "犯罪心理學",
    "presenters": "[1002] 林知柔 (28)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_30",
    "topic": "AREE(台灣學術倫理教育研究中心)修課",
    "presenters": "[1002] 江瑋宸 (6)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_21",
    "topic": "TCK第三文化小孩之研究",
    "presenters": "[1001] 曾行 (39)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_9",
    "topic": "YouTube頻道經營及動畫影片創作",
    "presenters": "[1001] 張岱亨 (12)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_53",
    "topic": "學習法文",
    "presenters": "[1002] 黃湜閔 (36)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_56",
    "topic": "學習西班牙文",
    "presenters": "[1002] 賴禹潔 (42)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_35",
    "topic": "明年單車一日北高長征計劃",
    "presenters": "[1002] 張廷碩 (11)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_10",
    "topic": "鐵人三項",
    "presenters": "[1001] 陳丹 (13)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_40",
    "topic": "游泳技巧",
    "presenters": "[1002] 潘奕廷 (19)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_17",
    "topic": "不同運動強度下賽前營養補充之影響",
    "presenters": "[1001] 張丞妘 (33)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_13",
    "topic": "銳品香水的等級",
    "presenters": "[1001] 施力豪 (10), [1001] 林巧耘 (30), [1001] 蘇楷云 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_40",
    "topic": "中國笛-合奏進行中",
    "presenters": "[1002] 林于安 (27), [1002] 劉晁媖 (38)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_55",
    "topic": "電繪設計實作",
    "presenters": "[1002] 蔡睿芸 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_22",
    "topic": "花藝美感探索：透過花藝體驗課",
    "presenters": "[1001] 黃畇硯 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_4",
    "topic": "從0開始打造一間禮服",
    "presenters": "[1001] 吳楚昱 (4)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_57",
    "topic": "個人視覺化作品集",
    "presenters": "[1002] 謝舒婷 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_50",
    "topic": "版畫製作",
    "presenters": "[1002] 陳怡臻 (32)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_3",
    "topic": "分析NBA隊伍擴建",
    "presenters": "[1001] 王舜傑 (2), [1001] 李晧瑋 (6)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_39",
    "topic": "段考數學加強",
    "presenters": "[1002] 陳亮宇 (15)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_25",
    "topic": "最低薪資調漲會怎麼影響失業率",
    "presenters": "[1001] 蕭昂森 (18), [1001] 江昀潔 (27)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_26",
    "topic": "自主學習股票",
    "presenters": "[1002] 王晨宇 (2)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1779861168987_5",
    "topic": "投資理財相關研究",
    "presenters": "[1001] 陳昱安 (9), [1001] 傅天禹 (15)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_29",
    "topic": "消費心理學",
    "presenters": "[1002] 朱立恩 (5)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_spsg9cwms",
    "topic": "投資理財",
    "presenters": "[1001] 江雋凱(3),林宏銘(7),潘奕劭(17)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_20",
    "topic": "資幾資比⽅能百戰百勝",
    "presenters": "[1001] 陳芊羽 (38)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },

  {
    "id": "p_38",
    "topic": "投資理財學",
    "presenters": "[1002] 郭萬霖 (14)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_38_1",
    "topic": "學習投資理財",
    "presenters": "[1002] 林煒宬 (16)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_44",
    "topic": "當金流進入法庭，我在法院看見的金融犯罪",
    "presenters": "[1002] 李書卉 (26)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_24",
    "topic": "自學橋牌",
    "presenters": "[1001] 龔芃朵 (45)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_36",
    "topic": "準備APCS",
    "presenters": "[1002] 梁文嘉 (12)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_16",
    "topic": "素描與其他繪畫練習",
    "presenters": "[1001] 徐正玲 (32)",
    "session": 0,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_47",
    "topic": "財經金融管理",
    "presenters": "[1002] 邱歆宸 (29)",
    "session": 0,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  }
];

function getPresentations() {
  const stored = localStorage.getItem('presentations');
  const storedMockHash = localStorage.getItem('mockPresentationsHash');
  const currentMockHash = "v25";

  if (storedMockHash !== currentMockHash) {
      localStorage.removeItem('published_presentations');
      let oldPres = [];
      if (stored) {
          try { oldPres = JSON.parse(stored); } catch(e) {}
      }

      if (oldPres.length > 0) {
          // ✅ PRESERVE the saved order: update fields but keep positions
          const merged = oldPres.map(oldP => {
              const newP = mockPresentations.find(p => p.id === oldP.id);
              if (newP) {
                  // Keep all teacher-edited fields, update topic/presenters/category from mock
                  return {
                      ...newP,
                      session: oldP.session,
                      status: oldP.status,
                      score: oldP.score,
                      comment: oldP.comment,
                      timeSpent: oldP.timeSpent,
                      isRecommended: oldP.isRecommended
                  };
              }
              return oldP; // keep entries not in new mock (edge case)
          });
          // Add any brand-new entries from mock that don't exist yet
          mockPresentations.forEach(newP => {
              if (!merged.find(p => p.id === newP.id)) {
                  merged.push(newP);
              }
          });

          localStorage.setItem('mockPresentationsHash', currentMockHash);
          localStorage.setItem('presentations', JSON.stringify(merged));
          return merged;
      } else {
          // First time: load from mock
          localStorage.setItem('mockPresentationsHash', currentMockHash);
          localStorage.setItem('presentations', JSON.stringify(mockPresentations));
          return mockPresentations;
      }
  }

  if (stored) {
    return JSON.parse(stored);
  }

  localStorage.setItem('presentations', JSON.stringify(mockPresentations));
  return mockPresentations;
}

function savePresentations(data) {
  localStorage.setItem('presentations', JSON.stringify(data));
}

function getPublishedPresentations() {
  const storedMockHash = localStorage.getItem('mockPresentationsHash');
  const currentMockHash = "v25";

  if (storedMockHash !== currentMockHash) {
      localStorage.removeItem('published_presentations');
      return getPresentations();
  }

  const pub = localStorage.getItem('published_presentations');
  if (pub) {
      return JSON.parse(pub);
  }
  return getPresentations();
}

function getFeedbacks() {
  const stored = localStorage.getItem('feedbacks');
  return stored ? JSON.parse(stored) : getMockFeedbacks();
}

function getMockFeedbacks() {
  const mockFbs = [
    {
      id: 'fb_1',
      studentName: '1001 林小明',
      session: '1',
      topic: '分析NBA隊伍擴建',
      content: '我覺得這個報告的數據分析做得非常詳細，尤其是各個城市的市場潛力評估，讓我學到了如何把地理和經濟結合在一起。',
      timestamp: '2026/5/25 上午9:15:30'
    },
    {
      id: 'fb_2',
      studentName: '1002 陳美美',
      session: '1',
      topic: '投資理財',
      content: '他們介紹的複利效應和簡單理財工具很實用，圖表畫得很好，淺顯易懂，對我們高中生很有幫助！',
      timestamp: '2026/5/25 上午9:20:12'
    }
  ];
  localStorage.setItem('feedbacks', JSON.stringify(mockFbs));
  return mockFbs;
}

function saveFeedback(feedback) {
  const feedbacks = getFeedbacks();
  feedbacks.push(feedback);
  localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
  
  if (typeof GAS_URL !== 'undefined') {
      fetch(GAS_URL, {
          method: 'POST',
          body: JSON.stringify({
              action: 'submit',
              id: feedback.id,
              studentName: feedback.studentName,
              session: feedback.session,
              topic: feedback.topic,
              content: feedback.content,
              timestamp: feedback.timestamp
          }),
          headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      }).catch(console.error);
  }
}

function saveFeedbacks(data) {
  localStorage.setItem('feedbacks', JSON.stringify(data));
}


// --- Remote Sync Logic for Google Apps Script ---
const GAS_URL = 'https://script.google.com/macros/s/AKfycbyQzb9kHzgfWXf_klcZKR8d-WzjqiGX2P3UZaZDqtf1IusQ1TWb0T2PMYAsCkN1QpY/exec';

let isFetching = false;
function fetchFeedbacksRemote() {
    if (isFetching) return;
    isFetching = true;
    fetch(GAS_URL)
        .then(res => res.json())
        .then(data => {
            if (Array.isArray(data)) {
                localStorage.setItem('feedbacks', JSON.stringify(data));
            }
            isFetching = false;
        })
        .catch(err => {
            console.error("Sync error:", err);
            isFetching = false;
        });
}

// (saveFeedback override removed because it caused double POST requests)

function likeFeedbackRemote(id, studentName) {
    fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'like', id: id, studentName: studentName }),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    }).catch(console.error);
}

function deleteFeedbackRemote(id) {
    fetch(GAS_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'delete', id: id }),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    }).catch(console.error);
}

// Start polling remote API every 5 seconds to keep feedbacks in sync
setInterval(fetchFeedbacksRemote, 5000);
// Initial fetch
setTimeout(fetchFeedbacksRemote, 500);
