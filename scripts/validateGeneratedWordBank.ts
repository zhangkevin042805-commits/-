import fs from 'node:fs';
const p='data/processed/cleaned_ielts_words.json';if(!fs.existsSync(p)){console.log('No generated wordbank to validate.');process.exit(0)}
const arr=JSON.parse(fs.readFileSync(p,'utf8'));console.log('Word count:',arr.length);
