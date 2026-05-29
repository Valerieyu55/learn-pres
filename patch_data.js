const fs = require('fs');
const newMock = fs.readFileSync('new_mock.json', 'utf8');
let dataJs = fs.readFileSync('data.js', 'utf8');

// Replace mockPresentations
const startIdx = dataJs.indexOf('const mockPresentations = [');
const endIdx = dataJs.indexOf('];\n\nfunction getPresentations()') + 2;
dataJs = dataJs.substring(0, startIdx) + 'const mockPresentations = ' + newMock + ';' + dataJs.substring(endIdx);

// Modify sync logic to update presenters too
dataJs = dataJs.replace(
    /if \(p\.topic !== mockP\.topic \|\| p\.category !== mockP\.category\) {/,
    'if (p.topic !== mockP.topic || p.category !== mockP.category || p.presenters !== mockP.presenters) {'
);
dataJs = dataJs.replace(
    /p\.category = mockP\.category;\n\s+updated = true;/,
    'p.category = mockP.category;\n               p.presenters = mockP.presenters;\n               updated = true;'
);

fs.writeFileSync('data.js', dataJs);
console.log('Patched data.js');
