const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

const parseUploadedCSV = eval(
    `(${code.substring(
        code.indexOf('function parseUploadedCSV'),
        code.indexOf('\n    function extractStudentsFromPresentations')
    ).replace(/const btnInterleave[\s\S]*/, '')})`
);

const csv = fs.readFileSync('114-2-G10自主學習發表.csv', 'utf8');
const list = parseUploadedCSV(csv);
list.forEach(p => {
    if (p.topic.includes('投資理財')) console.log(p.topic, p.presenters);
});
