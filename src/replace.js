import fs from 'fs';
import path from 'path';

const rootDir = '../src/app';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Replacements
  // Backgrounds
  content = content.replace(/bg-\[\#0A0A0A\]/g, 'bg-bg-primary');
  content = content.replace(/bg-\[\#050505\]/g, 'bg-bg-secondary');
  content = content.replace(/bg-\[\#000\]/g, 'bg-bg-secondary');
  content = content.replace(/bg-primary-black/g, 'bg-bg-primary');
  
  // Invert primary-black text (which is black in dark mode) to become white in light mode
  // But wait, if text was primary-black on a white bg, in light mode white bg -> dark bg, so text should -> light text.
  content = content.replace(/text-primary-black/g, 'text-bg-primary');

  // White classes
  // Need to be careful with bg-white, text-white, border-white
  // Handle opacities first
  content = content.replace(/text-white\/([0-9]+)/g, 'text-fg-primary/$1');
  content = content.replace(/bg-white\/([0-9]+)/g, 'bg-fg-primary/$1');
  content = content.replace(/border-white\/([0-9]+)/g, 'border-fg-primary/$1');
  content = content.replace(/from-white\/([0-9]+)/g, 'from-fg-primary/$1');
  content = content.replace(/to-white\/([0-9]+)/g, 'to-fg-primary/$1');
  content = content.replace(/via-white\/([0-9]+)/g, 'via-fg-primary/$1');
  
  // Base classes without opacity
  // Use negative lookbehind and lookahead to avoid partial matches, though Tailwind classes are usually space/quote bounded.
  content = content.replace(/(?<!-)text-white(?![-/])/g, 'text-fg-primary');
  content = content.replace(/(?<!-)bg-white(?![-/])/g, 'bg-fg-primary');
  content = content.replace(/(?<!-)border-white(?![-/])/g, 'border-fg-primary');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

walkDir(rootDir, processFile);
console.log('Done!');
