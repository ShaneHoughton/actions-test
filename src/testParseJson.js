import { readFile } from 'fs/promises';

const path = 'src/test.json';
const attr = 'name';

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