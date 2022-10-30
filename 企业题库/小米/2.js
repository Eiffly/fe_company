//导入包
var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

let str = read_line();

function printer(str) {
  let n = str.length;
  //   console.log(n);
  let dp = new Array(n + 1).fill(0).map((v) => new Array(n + 1).fill(0));
  for (let len = 1; len <= n; len++) {
    for (let left = 0; left + len - 1 < n; left++) {
      let right = left + len - 1;
      dp[left][right] = dp[left + 1][right] + 1;
      for (let k = left + 1; k <= right; k++) {
        if (str.charAt(left) == str.charAt(k)) {
          dp[left][right] = Math.min(
            dp[left][right],
            dp[left][k - 1] + dp[k + 1][right]
          );
        }
      }
    }
  }
  return dp[0][n - 1];
}
console.log(printer(str));
