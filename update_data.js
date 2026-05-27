const fs = require('fs');

let content = fs.readFileSync('./data.js', 'utf8');
const jsonMatch = content.match(/const mockPresentations = (\[.*?\]);/s);
if (!jsonMatch) {
    console.error('Could not find mockPresentations in data.js');
    process.exit(1);
}

let p = JSON.parse(jsonMatch[1]);

function mergeTopics(topicName, targetSession) {
    const items = p.filter(x => x.topic === topicName);
    if (items.length < 2) return;
    
    // Merge presenters
    const allPresenters = items.map(x => x.presenters).join(', ');
    
    // Keep the first item, update it
    const mainItem = items[0];
    mainItem.presenters = allPresenters;
    mainItem.session = targetSession;
    
    // Remove the others
    for (let i = 1; i < items.length; i++) {
        p = p.filter(x => x.id !== items[i].id);
    }
}

mergeTopics('冷次定律與渦電流煞車的定量研究', 4);
mergeTopics('不同水質對生植物生長與發芽表現之影響探討', 2);

const newJson = JSON.stringify(p, null, 2);
content = content.replace(jsonMatch[1], newJson);

fs.writeFileSync('./data.js', content, 'utf8');
console.log('Merged cross-class groups in data.js');
