//导入包
var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

// var __readInt = require("readInt-sync");
// __readInt.setDefaultOptions({ prompt: "" });
// var readInt = __readInt.prompt;

const [a1, a2, a3, a4, x] = read_line()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));
const l = [a1, a2, a3, a4];
const arr = [];
for (let i = 0; i < 4; i++) {
  let line = read_line()
    .trim()
    .split(" ")
    .map((v) => parseInt(v));
  arr.push([]);
  for (let j = 0; j < l[i]; j++) {
    arr[i].push(line[j]);
  }
}
// console.log(arr);
function zuzhuang(arr, x, l) {
  let lenArr = [];
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].filter((v) => v > x).length;
    min = Math.min(min, num);
    // lenArr.push(num);
  }
  //   return Math.min(...lenArr);
  return min;
}
console.log(zuzhuang(arr, x, l));

// const splits = read_line()
//   .trim()
//   .split(" ")
//   .map((v) => parseInt(v));
// let x = splits[4];
// let min = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < 4; i++) {
//   let count = splits[i];
//   let tempCount = 0;
//   for (let j = 0; j < count; j++) {
//     let tempScore = readInt();
//     if (tempScore > x) {
//       tempCount++;
//     }
//   }
//   if (tempCount < min) {
//     min = tempCount;
//   }
// }
// console.log(min);
// readInt();
