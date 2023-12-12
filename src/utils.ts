import { readFileSync } from 'fs';
import { EOL } from 'os';

export const getTextFromFile = (relPath: string): string[] => {
  const filePath = new URL(relPath, import.meta.url);
  const contents = readFileSync(filePath, 'utf-8');
  return contents.split(EOL);
};
