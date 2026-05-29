const fs = require('fs');

function parseUploadedCSV(text) {
    const lines = text.split(/\r?\n/);
    if (lines.length < 2) {
        return [];
    }

    const parseLine = (line) => {
        const result = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(cur.trim());
                cur = '';
            } else {
                cur += char;
            }
        }
        result.push(cur.trim());
        return result;
    };

    let firstLine = lines[0];
    if (firstLine.charCodeAt(0) === 0xFEFF) {
        firstLine = firstLine.substring(1);
    }

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
            }
        } else {
            seen.add(key);
            list.push({
                _key: key,
                class: clazz,
                topic: topic,
                presenters: [`[${clazz}] ${name}${seat ? ` (${seat})` : ''}`],
                category: category
            });
        }
    }

    return list;
}

const csv = fs.readFileSync('114-2-G10自主學習發表.csv', 'utf8');
const result = parseUploadedCSV(csv);
const duplicates = result.filter(r => r.topic === '投資理財');
console.log(JSON.stringify(duplicates, null, 2));
