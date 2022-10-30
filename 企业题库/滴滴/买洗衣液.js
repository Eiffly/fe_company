var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

// const [n, x, y, u, v] = read_line()
//   .split(" ")
//   .map((v) => parseInt(v));
// const a = read_line()
//   .split(" ")
//   .map((v) => parseInt(v));
// const b = read_line()
//   .split(" ")
//   .map((v) => parseInt(v));

function calc() {
  for (let i = 1; i < a.length; i++) {
    // const element = array[i];
    a[i] += a[i - 1];
    b[i] += b[i - 1];
  }
  let myl = Math.ceil(a[a.length - 1] / x);
  let xfs = Math.ceil(b[b.length - 1] / y);
  let total = 0;
  if (myl === xfs) {
    total = 5 * myl;
  } else if (myl > xfs) {
    total = 5 * xfs;
    let remain = myl - xfs;
    total + 5 * Math.floor(remain / 2) + 3 * (remain % 2);
  }
  return total;
}

console.log(calc());
// console.log(a); //导入包
// console.log(b); //导入包
