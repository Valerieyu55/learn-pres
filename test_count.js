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
let c = 0;
list.forEach(p => {
    c += p.presenters.split(',').length;
});
console.log('Count:', c);
