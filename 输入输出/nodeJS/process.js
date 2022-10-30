/**
 * 情景1:
 * 当输入为""，emit end事件
 * 当输入为空的时候，输出结果
 */
//#region
// process.stdin.resume();
// process.stdin.setEncoding("ascii");

// var input = "";
// process.stdin.on("data", function (data) {
//   //将输入的数据赋给input
//   input += data;
//   var chunk = data.slice(0, -2);
//   if (chunk === "") {
//     //当输入的数据是空
//     process.stdin.emit("end");
//   }
// });

// process.stdin.on("end", function () {
//   //将输入的多行数据转换为数组
//   var arr = input.split("\n");
//   //去掉数组的第一个数据
//   arr.shift();
//   var arrb = [];
//   //循环遍历数组，将去重后的数据保存到新的数组arrb中
//   for (var i = 0; i < arr.length; i++) {
//     if (arrb.indexOf(arr[i]) == -1) {
//       arrb.push(arr[i]);
//     }
//   }
//   //这里调用了API，排序，将得到的数组arrb排序并且转换为字符串
//   var str = arrb
//     .sort(function (a, b) {
//       return a - b;
//     })
//     .join("\n");
//   console.log(str);
// });
//#endregion

/**
 * 情景2:
 * 第一行是输入的行数n
 * 其余有n行数字,比如我们需要得到每一行的和
 */
//#region
process.stdin.resume();
process.stdin.setEncoding("ascii");
var input = "";
var i = 0;
var n;
process.stdin.on("data", function (data) {
  input += data;
  if (i == 0) n = parseInt(data.slice(0, -2));
  if (i == n) {
    process.stdin.emit("end");
  }
  i++;
});
process.stdin.on("end", function () {
  var arr = input.split("\n").slice(1);
  for (let j = 0; j < arr.length; j++) {
    let res = arr[j]
      .split(" ")
      .map(Number)
      .reduce((a, b) => a + b, 0);
    console.log(res);
  }
});
//#endregion

/**
 * 情景3:
 * 1.数据的输入是整数
 * 2.其余的数据输入是根据前面的来规定的
 */
//题目：最小花费爬楼梯
//  链接：https://www.nowcoder.com/practice/9b969a3ec20149e3b870b256ad40844e?tpId=230&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=
//#region
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var input = "";
// var i = 0;
// var n;
// process.stdin.on("data", function (data) {
//   input += data;
//   i++;
//   if (i == 2) {
//     process.stdin.emit("end");
//   }
// });

// process.stdin.on("end", function () {
//   input.split("\n").forEach((line, i) => {
//     if (i == 0) n = parseInt(line);
//     else if (i == 1) costArr = line.split(" ").map(Number).slice(0, n);
//     else {
//       console.log(dp(costArr));
//     }
//   });
// });
// function dp(costArr) {
//   let dp = new Array(costArr.length).fill(0);
//   dp[0] = 0;
//   dp[1] = 0;
//   for (let i = 2; i <= costArr.length; i++) {
//     dp[i] = Math.min(dp[i - 1] + costArr[i - 1], dp[i - 2] + costArr[i - 2]);
//   }
//   return dp[costArr.length];
// }
//#endregion

//题目： 连续数组最大和
// 链接：https://www.nowcoder.com/practice/1718131e719746e9a56fb29c40cc8f95?tpId=230&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=
//#region
// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// var input = "";
// var i = 0;
// var n;
// process.stdin.on("data", function (data) {
//   input += data;
//   i++;
//   if (i == 2) {
//     process.stdin.emit("end");
//   }
// });

// process.stdin.on("end", function () {
//   input.split("\n").forEach((line, i) => {
//     if (i == 0) n = parseInt(line);
//     else if (i == 1) arr = line.split(" ").map(Number).slice(0, n);
//     else {
//       console.log(maxSubArrSum(arr, n));
//     }
//   });
// });

// function maxSubArrSum(arr, num) {
//   if (arr === null || arr.length < 1) return 0;
//   // let max=-Number.MAX_VALUE;
//   let dp = new Array(num);
//   dp[0] = arr[0];
//   let max = dp[0];
//   for (let i = 1; i < num; i++) {
//     dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
//     max = Math.max(dp[i], max);
//   }
//   return max;
// }
//#endregion
