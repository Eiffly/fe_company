function calc(a, b) {
  a = parseInt(a);
  b = parseInt(b);
  return a + b;
}

// Process the input
const { count } = require("console");
var fs = require("fs");
var buf = "";

// 处理输入
process.stdin.on("readable", function () {
  var chunk = process.stdin.read();

  if (chunk) buf += chunk.toString();
});

// 处理输出
process.stdin.on("end", function () {
  buf.split("\n").forEach(function (line) {
    var tokens = line.split(" ");
    console.log(tokens.reduce(calc));
  });
});

//最小花费怕楼梯
// let buf = "";
// process.stdin.on("readable", () => {
//   let chunk = process.stdin.read();
//   if (chunk) buf += chunk.toString();
// });
// let n;
// let cost = [];
// let dp = [];
// process.stdin.on("end", () => {
//   buf.split("\n").forEach((line, i) => {
//     if (i === 0) n = Number(line);
//     else if (i === 1) cost = line.split(" ").map(Number);
//     else {
//       dp[0] = 0;
//       dp[1] = 0;

//       for (let s = 2; s <= n; s++) {
//         dp[s] = Math.min(dp[s - 1] + +cost[s - 1], dp[s - 2] + cost[s - 2]);
//       }
//       console.log(dp[n]);
//     }
//   });
// });
