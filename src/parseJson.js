import { readFile } from 'fs/promises';

const path = process.env.INPUT_PATH;
const attr = process.env.INPUT_ATTR;

const readJsonFile = async () => {
  const file = await readFile(path, 'utf-8');
  return JSON.parse(file);
}

try {
  const json = await readJsonFile();
  if (!json) throw new Error(`Could not locate json file with path: ${path}`);
  console.log(json[attr]);
} catch (error) {
  console.error(`Could not access attribute ${attr}: `, error);
}