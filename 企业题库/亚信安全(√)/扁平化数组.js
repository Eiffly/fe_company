// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
console.log(flatArr(["[[2,3],", "[1,4]]"]));
function flatArr(numarr) {
  let arr = [];
  for (let item of numarr) {
    item = item.replace(/["["]/g, "");
    item = item.slice(0, -2).split(",");
    item.forEach((element) => {
      arr.push(parseInt(element));
    });
  }
  res = arr.join(",");
  let sum = arr.reduce((p, c) => p + c);
  res = res + ", " + sum;
  return res;
}
