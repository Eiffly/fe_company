// function numFormat(num) {
//   // write code here
//   //   return num.toLocaleString();
//   return num.toString().replace(/d+/, function (n) {
//     return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
//       return $1 + ",";
//     });
//   });
// }

/**
 *
 * @param {*} num
 * @returns 字符串
 *
 * 思路: 先将数字转换为字符串
 * 1.划分小数点前后（先要判断是否有小数点）
 * 2.反转，每三位就进行一次逗号的拼接
 *       reduce(callback[,initialValue])
 *        initialValue不选择的时候 previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素。
 * 3.拼接前后的小数点
 */
function numFormat(num) {
  const num2str = num + "";
  const numArr = num2str.includes(".") ? num2str.split(".") : [num2str];
  const func = (numStr) =>
    numStr
      .split("")
      .reverse()
      .reduce((p, n, index) => {
        return (index % 3 ? n : n + ",") + p;
      });
  const intNum = func(numArr[0]);
  const floatNum = numArr[1] ? "." + numArr[1] : "";
  return intNum + floatNum;
}
console.log(numFormat(123456));
console.log(numFormat(1235.23576));
