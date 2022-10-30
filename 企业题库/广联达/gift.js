//导入包
// var __readline = require("readline-sync");
// __readline.setDefaultOptions({ prompt: "" });
// var read_line = __readline.prompt;
// const n = parseInt(read_line());
// const numArr = read_line().split(" ").map(Number);

// numArr.sort((a, b) => a - b);
let res = [];
res.push(numArr[0]);
let num;
for (let index = 1; index < numArr.length; index++) {
  num = numArr[index];
  res = insert(res, num);
}
console.log(res);

function insert(list, num) {
  for (let i = 0; i < res.length; i++) {
    if (num < list[1] && (list[i] - num) % 2 === 1) {
      temp = list[i];
      list[i] = num;
      num = temp;
    }
    list.push(num);
    return list;
  }
}

// console.log(numArr.join(" "));
