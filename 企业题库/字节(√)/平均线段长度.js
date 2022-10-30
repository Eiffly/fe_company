// 本题为考试多行输入输出规范示例，无需提交，不计分。
var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

var count = 0; // 初始状态为负数，表示还没开始读取
let N;
rl.on("line", function (line) {
  // javascript每行数据的回调接口
  if (count == 0) {
    N = parseInt(line.trim());
    count++;
  } else if (count === 1) {
    arr = line
      .trim()
      .split(",")
      .map((v) => parseFloat(v));
    //先进行排序
    arr.sort((a, b) => a - b);
    // 执行这个函数
    let avgMin = 0;
    avgMin = (arr[N - 1] - arr[0]) / N;
    let minLeft = 0;
    let minRight = N - 1;
    for (let left = 0; left < arr.length - N; left++) {
      let len = N;
      for (let right = left + N - 1; right < arr.length; right++) {
        let temp = (arr[right] - arr[left]) / len;
        if (temp < avgMin) {
          avgMin = temp;
          minLeft = left;
          minRight = right;
        }
        len++;
      }
    }
    let res = [arr[minLeft].toFixed(4), arr[minRight].toFixed(4)];
    console.log(res.join(","));
    // console.log(func(arr, N));
  }
});

// // 通过滑动窗口的方式来解决
// function func(arr, N) {

//   let newArr;
//   let min = Number.MAX_VALUE;
//   //平均长度=len/(N+1)
//   for (let i = 0; i + N < arr.length; i++) {
//     let dis = (arr[i + N] - arr[i]) / N + 1;
//     if (dis <= min) {
//       min = Math.min(min, dis);
//       newArr = [arr[i].toFixed(4), arr[i + N].toFixed(4)];
//     }
//   }

//   return newArr.join(",");
//   //   if (condition) {
//   //     //保留这个数的小数点后4位
//   //     newArr.push(dot1.toFixed(4));
//   //   }

//   //   if (condition) {
//   //     //保留这个数的小数点后4位
//   //     newArr.push(dot2.toFixed(4));
//   //   }
//   //   //数组转化为字符串
//   //   return newArr.join(",");
// }
