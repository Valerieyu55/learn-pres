const fs = require('fs');

const mockPresentations = [
  { id: 'p_1', topic: '高中生時間管理', presenters: '[1001] 李小明 (1)', session: 1, status: 'pending', comment: '', category: '未分類', isRecommended: false, duration: 0 },
  { id: 'p_25', topic: '投資理財', presenters: '[1001] 林宏銘 (7)', session: 4, status: 'pending', comment: '', category: '財經商管學群', isRecommended: false, duration: 0 },
  { id: 'p_27', topic: '投資理財', presenters: '[1001] 江雋凱 (3)', session: 4, status: 'pending', comment: '', category: '財經商管學群', isRecommended: false, duration: 0 },
  { id: 'p_28', topic: '投資理財', presenters: '[1001] 潘奕劭 (17)', session: 2, status: 'pending', comment: '', category: '財經商管學群', isRecommended: false, duration: 0 }
];

let presentations = JSON.parse(JSON.stringify(mockPresentations));

function parseUploadedCSV(text) {
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) return [];

    const parseLine = (line) => {
        const result = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') inQuotes = !inQuotes;
            else if (char === ',' && !inQuotes) { result.push(cur.trim()); cur = ''; }
            else cur += char;
        }
        result.push(cur.trim());
        return result;
    };

    let firstLine = lines[0];
    if (firstLine.charCodeAt(0) === 0xFEFF) firstLine = firstLine.substring(1);

    const header = parseLine(firstLine);
    const classIdx = header.findIndex(h => h.includes('班級'));
    const seatIdx = header.findIndex(h => h.includes('座號'));
    const nameIdx = header.findIndex(h => h.includes('姓名'));
    const topicIdx = header.findIndex(h => h.includes('主題'));
    const categoryIdx = header.findIndex(h => h.includes('學群') || h.includes('分類'));

    const list = [];
    const seen = new Set();

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;
        
        const row = parseLine(line);
        if (row.length <= Math.max(classIdx, nameIdx, topicIdx)) continue;

        const clazz = row[classIdx];
        const seat = seatIdx !== -1 ? row[seatIdx] : '';
        const name = row[nameIdx];
        const topic = row[topicIdx];
        let category = categoryIdx !== -1 && row[categoryIdx] ? row[categoryIdx].trim() : '未分類';

        if (category === '未分類' && typeof mockPresentations !== 'undefined') {
            const mockP = mockPresentations.find(m => m.presenters.includes(name));
            if (mockP && mockP.category && mockP.category !== '未分類') {
                category = mockP.category;
            }
        }

        if (clazz === '班級' || !clazz || !topic || !name) continue;

        const isIndividual = row.some(cell => typeof cell === 'string' && cell.includes('個人'));
        const key = isIndividual ? `${clazz}_${topic}_${name}_${seat}` : `${topic}`;

        if (seen.has(key)) {
            const p = list.find(x => x._key === key);
            if (p) {
                const presenterStr = `[${clazz}] ${name}${seat ? ` (${seat})` : ''}`;
                if (!p.presenters.includes(presenterStr)) {
                    p.presenters.push(presenterStr);
                }
                if (category !== '未分類' && p.category === '未分類') {
                    p.category = category;
                }
            }
        } else {
            seen.add(key);
            list.push({ _key: key, class: clazz, topic: topic, presenters: [`[${clazz}] ${name}${seat ? ` (${seat})` : ''}`], category: category });
        }
    }

    const getCategorySession = (item) => {
        const specialStudents = ['張廷愷', '陳宜宏', '楊明叡', '江安妤', '吳育宣', '陳子甯', '王宇珩', '吉諺揚', '邱植安', '柳兆剛', '范騰云', '郭聿安', '謝詠煜', '謝雨萱'];
        if (item.presenters.some(pr => specialStudents.some(s => pr.includes(s)))) return 2;
        const category = item.category;
        if (!category) return null;
        if (category.includes('大眾傳播') || category.includes('外語') || category.includes('文史哲') || category.includes('法政')) return 1;
        if (category.includes('A組') || category.includes('醫藥') || category.includes('數理') || category.includes('學科深化') || category.includes('課業深化') || category.includes('藝術與設計') || category.includes('藝術與表演')) return 2;
        if (category.includes('家政') || category.includes('體育') || category.includes('休閒')) return 3;
        if (category.includes('財經') || category.includes('商管') || category.includes('資訊')) return 4;
        return null;
    };

    const sessionCounts = {1: 0, 2: 0, 3: 0, 4: 0};
    list.forEach(item => {
        item.targetSession = getCategorySession(item);
        if (item.targetSession) sessionCounts[item.targetSession]++;
    });

    list.forEach(item => {
        if (!item.targetSession) {
            let minSession = 1;
            for (let s = 2; s <= 4; s++) {
                if (sessionCounts[s] < sessionCounts[minSession]) minSession = s;
            }
            item.targetSession = minSession;
            sessionCounts[minSession]++;
        }
    });

    const class1001 = list.filter(item => item.class === '1001');
    const class1002 = list.filter(item => item.class === '1002');
    const others = list.filter(item => item.class !== '1001' && item.class !== '1002');

    const interleavedList = [];
    let i = 0, j = 0;
    while (i < class1001.length || j < class1002.length) {
        if (i < class1001.length) interleavedList.push(class1001[i++]);
        if (j < class1002.length) interleavedList.push(class1002[j++]);
    }
    interleavedList.push(...others);

    return interleavedList.map((item, idx) => {
        return {
            id: `p_${Date.now()}_${idx + 1}`,
            topic: item.topic,
            presenters: item.presenters.join(', '),
            session: item.targetSession,
            status: 'pending',
            comment: '',
            category: item.category || '未分類'
        };
    });
}

function runFetchSimulation() {
    const text = fs.readFileSync('114-2-G10自主學習發表.csv', 'utf8');
    const parsed = parseUploadedCSV(text);
    if (parsed && parsed.length > 0) {
        const merged = parsed.map(newP => {
            let firstStudent = '';
            const match = newP.presenters.match(/\]\s*([^\(,\s]+)/);
            if (match) firstStudent = match[1];

            const existingP = presentations.find(oldP => oldP.presenters.includes(firstStudent));
            
            if (existingP) {
                let keptSession = existingP.session;
                
                const specialStudents = ['張廷愷', '陳宜宏', '楊明叡', '江安妤', '吳育宣', '陳子甯', '王宇珩', '吉諺揚', '邱植安', '柳兆剛', '范騰云', '郭聿安', '謝詠煜', '謝雨萱'];
                const isSpecial = specialStudents.some(s => newP.presenters.includes(s));
                if (isSpecial && keptSession !== 2 && keptSession !== 0) keptSession = 2;

                return { 
                    ...newP, 
                    id: existingP.id, 
                    session: keptSession, 
                    status: existingP.status, 
                    comment: existingP.comment, 
                    isRecommended: existingP.isRecommended, 
                    duration: existingP.duration 
                };
            }
            return newP;
        });
        
        presentations = merged;
    }
    console.log("FINAL PRESENTATIONS COUNT:", presentations.length);
    console.log(JSON.stringify(presentations.filter(p => p.topic === '投資理財'), null, 2));
}

runFetchSimulation();
