//导入包
var __readline = require("readline-sync");
__readline.setDefaultOptions({ prompt: "" });
var read_line = __readline.prompt;

// 最长公共头
let strs = read_line().split(" ");
function commonHead(strs) {
  if (strs.length <= 1) {
    return strs.length ? strs[0] : "";
  }
  let coo = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let reg = new RegExp(`^${coo}`);
    if (!reg.test(strs[i])) {
      i--;
      coo = coo.slice(0, coo.length - 1);
      continue;
    }
    // while (strs[i].slice(0, coo.length) !== coo) {
    //   coo = coo.slice(0, coo.length - 1);
    // }
  }
  return coo;
}
console.log(commonHead(strs));
