const readline = require('readline');

const lineReverse = (line) => line.split("").reverse().join("");

//Example
const str = "улыбок тебе дед мокар";
console.log(str);
console.log(lineReverse(str));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', (line) => {
  console.log(lineReverse(line));
});

rl.once('close', () => {
  console.log("program completed");
});
