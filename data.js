const mockPresentations = [
  {
    "id": "p_23",
    "topic": "準備雅思",
    "presenters": "[1001] 錢安婕 (43)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_49",
    "topic": "學習英文",
    "presenters": "[1002] 陳希 (31), 陳莘棠 (34)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_18",
    "topic": "SAT準備",
    "presenters": "[1001] 張采庭 (35)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_41",
    "topic": "日文自學",
    "presenters": "[1002] 賴泓劭 (20)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_19",
    "topic": "N5日文養成中",
    "presenters": "[1001] 陳妍熹 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_47",
    "topic": "學習韓文",
    "presenters": "[1002] 邱歆宸 (29)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_31",
    "topic": "西語",
    "presenters": "[1002] 沈稚荏 (7)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_56",
    "topic": "學習西班牙文",
    "presenters": "[1002] 賴禹潔 (42)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_53",
    "topic": "學習法文",
    "presenters": "[1002] 黃湜閔 (36)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "外語與檢定學群"
  },
  {
    "id": "p_9",
    "topic": "YouTube頻道經營及動畫影片創作",
    "presenters": "[1001] 張岱亨 (12)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "大眾傳播學群"
  },
  {
    "id": "p_48",
    "topic": "影像剪輯學習",
    "presenters": "[1002] 張心妮 (30), 潘柔涵 (39)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "大眾傳播學群"
  },
  {
    "id": "p_44",
    "topic": "烘焙時光：探索餅乾的美味世界",
    "presenters": "[1002] 李書卉 (26)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "家政與生活應用學群"
  },
  {
    "id": "p_21",
    "topic": "TCK第三文化小孩之研究",
    "presenters": "[1001] 曾行 (39)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "文史哲與法政學群"
  },
  {
    "id": "p_54",
    "topic": "立法精神及修正",
    "presenters": "[1002] 劉家安 (37)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "文史哲與法政學群"
  },
  {
    "id": "p_51",
    "topic": "透過影視作品看社會議題",
    "presenters": "[1002] 陳宣竹 (33)",
    "session": 1,
    "status": "pending",
    "comment": "",
    "category": "文史哲與法政學群"
  },
  {
    "id": "p_3",
    "topic": "投資理財",
    "presenters": "[1001] 江雋凱 (3), 林宏銘 (7), 陳昱安 (9), 潘奕劭 (17)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_38",
    "topic": "投資理財學",
    "presenters": "[1002] 郭萬霖 (14)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_38_1",
    "topic": "投資理財學",
    "presenters": "[1002] 林煒宬 (16)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_3_1",
    "topic": "投資理財",
    "presenters": "[1001] 傅天禹 (15)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_46",
    "topic": "高中生理財與省錢小技巧",
    "presenters": "[1002] 林知柔 (28)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_12",
    "topic": "最低薪資調漲會怎麼影響失業率",
    "presenters": "[1001] 蕭昂森 (18), 江昀潔 (27)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_26",
    "topic": "自主學習股票",
    "presenters": "[1002] 王晨宇 (2)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_2",
    "topic": "分析NBA隊伍擴建",
    "presenters": "[1001] 王舜傑 (2), 李晧瑋 (6)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_29",
    "topic": "消費心理學",
    "presenters": "[1002] 朱立恩 (5)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "財經商管學群"
  },
  {
    "id": "p_32",
    "topic": "從零開始設計遊戲",
    "presenters": "[1002] 邱植安 (8)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "資訊工程學群"
  },
  {
    "id": "p_5",
    "topic": "十字翻轉棋",
    "presenters": "[1001] 李建頡 (5), 張依璇 (34)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "資訊工程學群"
  },
  {
    "id": "p_34",
    "topic": "探索數學奧妙",
    "presenters": "[1002] 范騰云 (10), 陳柏霖 (17), 廖振玹 (18)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_25",
    "topic": "公式證明及解難題",
    "presenters": "[1002] 王宇珩 (1)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_37",
    "topic": "冷次定律與渦電流煞車的定量研究",
    "presenters": "[1002] 郭聿安 (13)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_28",
    "topic": "黏菌馴化實驗",
    "presenters": "[1002] 吉諺揚 (4), 謝雨萱 (43)",
    "session": 2,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_52",
    "topic": "紅樓夢觀後感",
    "presenters": "[1002] 陳意喬 (35), 蔡侑庭 (40)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "文史哲與法政學群"
  },
  {
    "id": "p_30",
    "topic": "AREE(台灣學術倫理教育研究中心)修課",
    "presenters": "[1002] 江瑋宸 (6)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "文史哲與法政學群"
  },
  {
    "id": "p_13",
    "topic": "學吉他",
    "presenters": "[1001] 蘇雋博 (20)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與表演學群"
  },
  {
    "id": "p_27",
    "topic": "自學Bach Partita No.3",
    "presenters": "[1002] 王湧碩 (3)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與表演學群"
  },
  {
    "id": "p_1",
    "topic": "踢踏舞比賽準備歷程與自主訓練管理",
    "presenters": "[1001] 王昊祐 (1)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與表演學群"
  },
  {
    "id": "p_45",
    "topic": "中國笛-合奏進行中",
    "presenters": "[1002] 林于安 (27), 劉晁媖 (38)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與表演學群"
  },
  {
    "id": "p_43",
    "topic": "琴、音樂與我的自我救贖",
    "presenters": "[1002] 涂維凱 (22)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與表演學群"
  },
  {
    "id": "p_16",
    "topic": "素描與其他繪畫練習",
    "presenters": "[1001] 徐正玲 (32)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_50",
    "topic": "版畫製作",
    "presenters": "[1002] 陳怡臻 (32)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_4",
    "topic": "從0開始打造一間禮服",
    "presenters": "[1001] 吳楚昱 (4)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_55",
    "topic": "電繪設計實作",
    "presenters": "[1002] 蔡睿芸 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_7",
    "topic": "銳品香水的等級",
    "presenters": "[1001] 施力豪 (10), 林巧耘 (30), 蘇楷云 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_57",
    "topic": "個人視覺化作品集",
    "presenters": "[1002] 謝舒婷 (44)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_22",
    "topic": "花藝美感探索：透過花藝體驗課",
    "presenters": "[1001] 黃畇硯 (41)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "藝術與設計學群"
  },
  {
    "id": "p_24",
    "topic": "學科精進",
    "presenters": "[1001] 龔芃朵 (45)",
    "session": 3,
    "status": "pending",
    "comment": "",
    "category": "課業深化與學科精進"
  },
  {
    "id": "p_33",
    "topic": "考試作弊神器—學習物聯網應用、軟體編程及AI運用",
    "presenters": "[1002] 柳兆剛 (9)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "資訊工程學群"
  },
  {
    "id": "p_36",
    "topic": "準備APCS",
    "presenters": "[1002] 梁文嘉 (12)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "資訊工程學群"
  },
  {
    "id": "p_14",
    "topic": "冷次定律與渦電流煞車的定量研究",
    "presenters": "[1001] 江安妤 (26), 沈毓庭 (29)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_8",
    "topic": "不同水質對生植物生長與發芽表現之影響探討",
    "presenters": "[1001] 張廷愷 (11), 楊明叡 (16)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_11",
    "topic": "自然專題-乾旱壓力對植物氣孔關閉動力學與壓力記憶之研究",
    "presenters": "[1001] 陳宜宏 (14), 吳育宣 (28), 陳子甯 (36)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_42",
    "topic": "不同水質對生植物生長與發芽表現之影響探討",
    "presenters": "[1002] 謝詠煜 (21)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_20",
    "topic": "資幾資比⽅能百戰百勝",
    "presenters": "[1001] 陳芊羽 (38)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_15",
    "topic": "解剖學",
    "presenters": "[1001] 林詠潔 (31), 楊佑澧 (42)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_39",
    "topic": "段考數學加強",
    "presenters": "[1002] 陳亮宇 (15)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "醫藥生科與數理化學群"
  },
  {
    "id": "p_6",
    "topic": "科學與跑步的關係",
    "presenters": "[1001] 林紘安 (8), 賴煜翔 (19)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "體育與休閒管理"
  },
  {
    "id": "p_40",
    "topic": "游泳技巧",
    "presenters": "[1002] 潘奕廷 (19)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "體育與休閒管理"
  },
  {
    "id": "p_17",
    "topic": "不同運動強度下賽前營養補充之影響",
    "presenters": "[1001] 張丞妘 (33)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "體育與休閒管理"
  },
  {
    "id": "p_35",
    "topic": "明年單車一日北高長征計劃",
    "presenters": "[1002] 張廷碩 (11)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "體育與休閒管理"
  },
  {
    "id": "p_10",
    "topic": "鐵人三項",
    "presenters": "[1001] 陳丹 (13)",
    "session": 4,
    "status": "pending",
    "comment": "",
    "category": "體育與休閒管理"
  }
];

function getPresentations() {
  const stored = localStorage.getItem('presentations');
  if (stored) {
    let parsed = JSON.parse(stored);
    let updated = false;
    // Map categories from mock data to handle legacy data without categories
    parsed.forEach(p => {
      const mockP = mockPresentations.find(m => m.id === p.id);
      if (mockP && (!p.category || p.category === '未分類' || p.category !== mockP.category)) {
        p.category = mockP.category;
        updated = true;
      }
    });
    if (updated) {
      localStorage.setItem('presentations', JSON.stringify(parsed));
    }
    return parsed;
  }
  localStorage.setItem('presentations', JSON.stringify(mockPresentations));
  return mockPresentations;
}

function savePresentations(data) {
  localStorage.setItem('presentations', JSON.stringify(data));
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
