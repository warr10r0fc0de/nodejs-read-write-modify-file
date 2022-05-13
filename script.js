const { readFile, writeFile } = require('fs/promises');

(async () => {
  try {
    const data = await readFile('numbers.txt', 'utf8');
    const dataArr = data.split('\n');
    const multipleLastNumberX2 = Number(dataArr[dataArr.length - 1]) * 2;
    await writeFile('numbers.txt', `\n${multipleLastNumberX2}`, { flag: 'a' });
  } catch (error) {
    console.log(`${error}`);
  }
})();
