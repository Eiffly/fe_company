/**
 * 多行输入，第一行为下面几行的行数
 * 3
 * 3 4 5
 * 3 4 5
 * 3 7 9
 */
//#region
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// var inputArr = [];
// rl.on("line", function (input) {
//   //将输入放到新建的空数组中
//   inputArr.push(input);
//   //将输入的数据转换为数组
//   var inputs = input.split(" ");
//   //得到第一行的那个数（行数）
//   var nLine = +inputArr[0];
//   //判断，如果第一行输入的数字（行数）等于输入的总行数
//   if (inputArr.length == nLine + 1) {
//     //截取第一行到最后一行数据（即：除了第一个数据行数之外的其他数据）
//     var arr = inputArr.slice(1);
//     //这里打印的arr不包括第一行数字（行数）
//     console.log(arr);
//     //这里打印的inputArr包括第一行数字（行数）
//     // console.log(inputArr);
//     inputArr = [];
//     // console.log(inputArr);
//   }
// });
//#endregion

/**
 * 固定的多行数（第一行为一个数字n，第二行为一个长度为n的数组）
 * 8
 * 1 -2 3 10 -4 7 2 -5
 */
// 连续子数组最大和
//#region
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let lines = [];
// let k = 0;
// let num;
// let arr;
// rl.on("line", function (line) {
//   lines.push(line);
//   if (k === 0) {
//     num = parseInt(lines[0]);
//   } else if (k === 1) {
//     arr = lines[1].split(" ").map(Number);
//     console.log(maxSubArrSum(arr, num));
//   }
//   k++;
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
