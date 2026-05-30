const mockPresentations = [
  {
    "id": "p_1780042813531_1",
    "topic": "踢踏舞比賽準備歷程與自主訓練管理",
    "presenters": "[1001] 王昊祐 (1)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_2",
    "topic": "公式證明及解難題",
    "presenters": "[1002] 王宇珩 (1)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_3",
    "topic": "分析NBA隊伍擴建",
    "presenters": "[1001] 王舜傑 (2), [1001] 李晧瑋 (6)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_4",
    "topic": "自主學習股票",
    "presenters": "[1002] 王晨宇 (2)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_5",
    "topic": "投資理財",
    "presenters": "[1001] 江雋凱 (3), [1001] 林宏銘 (7), [1001] 潘奕劭 (17)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_6",
    "topic": "自學Bach Partita No.3",
    "presenters": "[1002] 王湧碩 (3)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_7",
    "topic": "從0開始打造一間禮服",
    "presenters": "[1001] 吳楚昱 (4)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_8",
    "topic": "黏菌馴化實驗",
    "presenters": "[1002] 吉諺揚 (4), [1002] 謝雨萱 (43)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_9",
    "topic": "十字翻轉棋",
    "presenters": "[1001] 李建頡 (5), [1001] 張依璇 (34)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_10",
    "topic": "消費心理學",
    "presenters": "[1002] 朱立恩 (5)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_11",
    "topic": "科學與跑步的關係",
    "presenters": "[1001] 林紘安 (8), [1001] 賴煜翔 (19)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_12",
    "topic": "AREE(台灣學術倫理教育研究中心)修課",
    "presenters": "[1002] 江瑋宸 (6)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_13",
    "topic": "投資理財相關研究",
    "presenters": "[1001] 陳昱安 (9), [1001] 傅天禹 (15)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_14",
    "topic": "西語",
    "presenters": "[1002] 沈稚荏 (7)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_15",
    "topic": "銳品香水的等級",
    "presenters": "[1001] 施力豪 (10), [1001] 林巧耘 (30), [1001] 蘇楷云 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_16",
    "topic": "從零開始設計遊戲",
    "presenters": "[1002] 邱植安 (8)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_17",
    "topic": "不同水質對生植物生長與發芽表現之影響探討",
    "presenters": "[1001] 張廷愷 (11), [1001] 楊明叡 (16), [1002] 謝詠煜 (21)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_18",
    "topic": "考試作弊神器—學習物聯網應用、軟體編程及AI運用",
    "presenters": "[1002] 柳兆剛 (9)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_19",
    "topic": "YouTube頻道經營及動畫影片創作",
    "presenters": "[1001] 張岱亨 (12)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_20",
    "topic": "探索數學奧妙",
    "presenters": "[1002] 范騰云 (10), [1002] 陳柏霖 (17), [1002] 廖振玹 (18)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_21",
    "topic": "鐵人三項",
    "presenters": "[1001] 陳丹 (13)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_22",
    "topic": "明年單車一日北高長征計劃",
    "presenters": "[1002] 張廷碩 (11)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_23",
    "topic": "自然專題-乾旱壓力對植物氣孔關閉動力學與壓力記憶之研究",
    "presenters": "[1001] 陳宜宏 (14), [1001] 吳育宣 (28), [1001] 陳子甯 (36)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_24",
    "topic": "準備APCS",
    "presenters": "[1002] 梁文嘉 (12)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_25",
    "topic": "最低薪資調漲會怎麼影響失業率",
    "presenters": "[1001] 蕭昂森 (18), [1001] 江昀潔 (27)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_26",
    "topic": "投資理財學",
    "presenters": "[1002] 郭萬霖 (14)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_27",
    "topic": "俄文學習",
    "presenters": "[1001] 蘇雋博 (20)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_28",
    "topic": "段考數學加強",
    "presenters": "[1002] 陳亮宇 (15)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_29",
    "topic": "冷次定律與渦電流煞車的定量研究",
    "presenters": "[1001] 江安妤 (26), [1001] 沈毓庭 (29), [1002] 郭聿安 (13)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_30",
    "topic": "學習投資理財",
    "presenters": "[1002] 林煒宬 (16)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_31",
    "topic": "解剖學",
    "presenters": "[1001] 林詠潔 (31), [1001] 楊佑澧 (42)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_32",
    "topic": "游泳技巧",
    "presenters": "[1002] 潘奕廷 (19)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_33",
    "topic": "素描與其他繪畫練習",
    "presenters": "[1001] 徐正玲 (32)",
    "session": 0,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_34",
    "topic": "日文自學",
    "presenters": "[1002] 賴泓劭 (20)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_35",
    "topic": "不同運動強度下賽前營養補充之影響",
    "presenters": "[1001] 張丞妘 (33)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_36",
    "topic": "琴、音樂與我的自我救贖",
    "presenters": "[1002] 涂維凱 (22)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_37",
    "topic": "SAT準備",
    "presenters": "[1001] 張采庭 (35)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_38",
    "topic": "當金流進入法庭，我在法院看見的金融犯罪",
    "presenters": "[1002] 李書卉 (26)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_39",
    "topic": "N5日文養成中",
    "presenters": "[1001] 陳妍熹 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_40",
    "topic": "中國笛-合奏進行中",
    "presenters": "[1002] 林于安 (27), [1002] 劉晁媖 (38)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_41",
    "topic": "資幾資比⽅能百戰百勝",
    "presenters": "[1001] 陳芊羽 (38)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_42",
    "topic": "犯罪心理學",
    "presenters": "[1002] 林知柔 (28)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_43",
    "topic": "TCK第三文化小孩之研究",
    "presenters": "[1001] 曾行 (39)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_44",
    "topic": "財經金融管理",
    "presenters": "[1002] 邱歆宸 (29)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_45",
    "topic": "花藝美感探索：透過花藝體驗課",
    "presenters": "[1001] 黃畇硯 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_46",
    "topic": "影像剪輯學習",
    "presenters": "[1002] 張心妮 (30), [1002] 潘柔涵 (39)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_47",
    "topic": "準備雅思",
    "presenters": "[1001] 錢安婕 (43)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_48",
    "topic": "學習英文",
    "presenters": "[1002] 陳希 (31), [1002] 陳莘棠 (34)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_49",
    "topic": "自學橋牌",
    "presenters": "[1001] 龔芃朵 (45)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_50",
    "topic": "版畫製作",
    "presenters": "[1002] 陳怡臻 (32)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_51",
    "topic": "透過影視作品看社會議題",
    "presenters": "[1002] 陳宣竹 (33)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_52",
    "topic": "從MBTI熱潮看現代人的自我認同與社交心理學",
    "presenters": "[1002] 陳意喬 (35)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_53",
    "topic": "學習法文",
    "presenters": "[1002] 黃湜閔 (36)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_54",
    "topic": "立法精神及修正",
    "presenters": "[1002] 劉家安 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_55",
    "topic": "日文自學",
    "presenters": "[1002] 蔡侑庭 (40)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_56",
    "topic": "電繪設計實作",
    "presenters": "[1002] 蔡睿芸 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_57",
    "topic": "學習西班牙文",
    "presenters": "[1002] 賴禹潔 (42)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  },
  {
    "id": "p_1780042813531_58",
    "topic": "個人視覺化作品集",
    "presenters": "[1002] 謝舒婷 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "未分類"
  }
];

function getPresentations() {
  const stored = localStorage.getItem('presentations');
  const storedMockHash = localStorage.getItem('mockPresentationsHash');
  const currentMockHash = "v3_" + JSON.stringify(mockPresentations.map(m => ({ p: m.presenters, t: m.topic, c: m.category, s: m.session })));

  if (stored) {
    let parsed = JSON.parse(stored);
    let updated = false;
    
    // 只有當 data.js 裡的 mockPresentations 真的是被手動修改過時，才進行同步覆蓋
    if (storedMockHash !== currentMockHash) {
        localStorage.removeItem('published_presentations'); // 強制更新學生端
        parsed.forEach(p => {
          let studentName = '';
          const match = p.presenters.match(/\]\s*([^\(,\s]+)/);
          if (match) studentName = match[1];
          
          const mockP = mockPresentations.find(m => m.presenters.includes(studentName));
          if (mockP) {
            if (p.topic !== mockP.topic || p.category !== mockP.category || p.presenters !== mockP.presenters || p.session !== mockP.session) {
               p.topic = mockP.topic;
               p.category = mockP.category;
               p.presenters = mockP.presenters;
               p.session = mockP.session;
               updated = true;
            }
          }
        });
        localStorage.setItem('mockPresentationsHash', currentMockHash);
    }

    parsed.forEach(p => {
      // 強制 A 組特定名單的學生回到第 2 節
      const specialStudents = ['張廷愷', '陳宜宏', '楊明叡', '江安妤', '吳育宣', '陳子甯', '王宇珩', '吉諺揚', '邱植安', '柳兆剛', '范騰云', '郭聿安', '謝詠煜', '謝雨萱'];
      const isSpecial = specialStudents.some(s => p.presenters.includes(s));
      if (isSpecial && p.session !== 2 && p.session !== 0) {
          p.session = 2;
          updated = true;
      }
    });

    // 強制去重複 (Deduplication) 確保不會有 117 個異常複製的卡片
    const uniqueParsed = [];
    const seenSignatures = new Set();
    parsed.forEach(p => {
        const sig = `${p.topic}_${p.presenters}`;
        if (!seenSignatures.has(sig)) {
            seenSignatures.add(sig);
            uniqueParsed.push(p);
        } else {
            updated = true; // 有發現並清理掉重複，標記為需要更新
        }
    });
    parsed = uniqueParsed;

    // 名單防遺漏機制 (Self-healing): 檢查 mockPresentations 裡是否有學生不在 parsed 裡面，如果有則補回來
    mockPresentations.forEach(mockP => {
        // 取出這組的第一個學生名字來比對
        let firstStudent = '';
        const match = mockP.presenters.match(/\]\s*([^\(,\s]+)/);
        if (match) firstStudent = match[1];

        const exists = parsed.some(p => p.presenters.includes(firstStudent));
        if (!exists) {
            parsed.push({ ...mockP });
            updated = true;
        }
    });

    if (updated) {
      localStorage.setItem('presentations', JSON.stringify(parsed));
    }
    return parsed;
  }
  localStorage.setItem('mockPresentationsHash', currentMockHash);
  localStorage.setItem('presentations', JSON.stringify(mockPresentations));
  return mockPresentations;
}

function savePresentations(data) {
  localStorage.setItem('presentations', JSON.stringify(data));
}

function getPublishedPresentations() {
  const storedMockHash = localStorage.getItem('mockPresentationsHash');
  const currentMockHash = "v3_" + JSON.stringify(mockPresentations.map(m => ({ p: m.presenters, t: m.topic, c: m.category, s: m.session })));

  // 若版本有更新，放棄舊版的 published_presentations，強制拿最新的
  if (storedMockHash !== currentMockHash) {
      localStorage.removeItem('published_presentations');
      return getPresentations();
  }

  const pub = localStorage.getItem('published_presentations');
  if (pub) {
      let parsed = JSON.parse(pub);
      const uniqueParsed = [];
      const seenSignatures = new Set();
      let updated = false;
      parsed.forEach(p => {
          const sig = `${p.topic}_${p.presenters}`;
          if (!seenSignatures.has(sig)) {
              seenSignatures.add(sig);
              uniqueParsed.push(p);
          } else {
              updated = true;
          }
      });
      if (updated) {
          localStorage.setItem('published_presentations', JSON.stringify(uniqueParsed));
      }
      return uniqueParsed;
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
}

function saveFeedbacks(data) {
  localStorage.setItem('feedbacks', JSON.stringify(data));
}
