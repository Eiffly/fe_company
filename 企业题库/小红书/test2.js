//导入包
var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

const [n, k] = read_line()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));

const data = read_line()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));
// let data=new Array(n)
let dp = new Array(n);
dp[0] = 0;
dp[1] = Math.max(0, data[1] - data[0]);
for (let i = 2; i < n; i++) {
  let min = dp[i - 1] + Math.max(0, data[i] - data[i - 1]);
  for (let j = 2; j <= k && i - j >= 0; j++) {
    min = Math.min(min, dp[i - j] + Math.max(0, data[i] - data[i - j]));
  }
  dp[i] = min;
}
console.log(dp[n - 1]);
