const path = process.env.INPUT_PATH;
const attr = process.env.INPUT_ATTR;

try {
  const response = fetch(path);
  if (!response.ok) throw new Error(`Could not locate json file with path: ${path}`);
  console.log(response.json()[attr]);
} catch (error) {
  console.error(`Could not access attribute ${attr}: `, error);
}