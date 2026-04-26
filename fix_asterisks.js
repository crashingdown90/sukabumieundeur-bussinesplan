const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match *word* or *multiple words* ensuring it doesn't match /* comments */
  // The regex looks for an asterisk, followed by a non-space character, followed by anything, followed by a non-space character, followed by an asterisk.
  // We use negative lookbehind to ensure the first asterisk is not preceded by a slash /
  // and the second asterisk is not followed by a slash /
  const regex = /(?<!\/|\*)\*([^\*\n/]+)\*(?!\/|\*)/g;
  
  let newContent = content.replace(regex, '$1');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent);
    console.log('Fixed:', file);
  }
});
