let s = [5, 4, 3, 2, 1];
let r = [1, 5, 3, 4, 2];
// let r = [4, 3, 2, 1, 5];

// 思路一：可以理解为求公共最长子序列的问题
//#region
n = r.length;
let dp = new Array(n + 1).fill(0).map((v) => new Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (s[i - 1] == r[j - 1]) {
      dp[i][j] = dp[i - 1][j - 1] + 1;
    } else {
      dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
    }
  }
}
console.log(n - dp[n][n]);
