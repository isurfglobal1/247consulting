import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const replaceColor = (content, hex, semanticName) => {
  const regex = new RegExp(`(?<=[-:]|\\b)\\[\\${hex}\\]`, 'gi');
  return content.replace(regex, semanticName);
};

walkDir('./src/app', (filePath) => {
  if (!filePath.endsWith('.tsx')) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Dark generic colors
  content = replaceColor(content, '#0A0A0A', 'bg-primary');
  content = replaceColor(content, '#020202', 'bg-primary');
  content = replaceColor(content, '#050505', 'bg-secondary');
  content = replaceColor(content, '#000000', 'bg-secondary');
  content = replaceColor(content, '#000', 'bg-secondary');
  content = replaceColor(content, '#111', 'bg-secondary');
  content = replaceColor(content, '#151515', 'bg-secondary');
  
  // Light generic colors
  content = replaceColor(content, '#F5F7FA', 'soft-gray');
  content = replaceColor(content, '#E5E7EB', 'neutral-gray');
  content = replaceColor(content, '#4B5563', 'text-gray');

  // ServiceDetailB Deep Navy
  content = replaceColor(content, '#102A43', 'deep-navy');

  // Also replace primary-black with bg-primary
  content = content.replace(/bg-primary-black/g, 'bg-bg-primary');
  content = content.replace(/text-primary-black/g, 'text-bg-primary');

  // Handle white classes with lookbehinds to avoid matching non-utilities
  content = content.replace(/text-white\/([0-9]+)/g, 'text-fg-primary/$1');
  content = content.replace(/bg-white\/([0-9]+)/g, 'bg-fg-primary/$1');
  content = content.replace(/border-white\/([0-9]+)/g, 'border-fg-primary/$1');
  content = content.replace(/from-white\/([0-9]+)/g, 'from-fg-primary/$1');
  content = content.replace(/to-white\/([0-9]+)/g, 'to-fg-primary/$1');
  content = content.replace(/via-white\/([0-9]+)/g, 'via-fg-primary/$1');
  
  // White classes without opacity
  content = content.replace(/(?<!-)text-white(?![-/a-zA-Z0-9])/g, 'text-fg-primary');
  content = content.replace(/(?<!-)bg-white(?![-/a-zA-Z0-9])/g, 'bg-fg-primary');
  content = content.replace(/(?<!-)border-white(?![-/a-zA-Z0-9])/g, 'border-fg-primary');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
});
