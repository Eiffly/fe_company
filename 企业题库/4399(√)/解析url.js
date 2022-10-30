/**
 * 输入：url
 * 输出：urlObj
 * 要求:
 * 1. enable转换成为true
 * 2.能转换成数字就转换成数字
 * 3.同一个key，如果有多个value，存放到一个数组里面
 */

// var buf = "";
// // 处理输入
// process.stdin.on("readable", function () {
//   var chunk = process.stdin.read();

//   if (chunk) buf += chunk.toString();
// });

// // 处理输出
// process.stdin.on("end", function () {
//   console.log(urlToObj(buf));
//   //   buf.split("\n").forEach(function (line) {
//   //     var tokens = line.split(" ");
//   //     console.log(tokens.reduce(calc));
//   //   });
// });

// var readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.on("line", function (line) {
//   console.log(urlToObj(line));
// });

console.log(
  urlToObj(
    "http://www.4399.com/?user=candidate&id=43&id=99&city=%E5%B9%BE%E5%B7%9E&enabled"
  )
);
// 输入输出
function urlToObj(url) {
  let urlObj = {};
  let arr = url.split("?");
  let params = arr[1].split("&");
  let fakeArr = [];
  for (let i = 0; i < params.length; i++) {
    //   const element = array[i];
    const param = params[i].split("=");
    let [key, value] = param;
    // 需要提前判断数据是否有被执行
    if (typeof value === "string" && value.substring(0, 1) === "%") {
      //   console.log("我被执行了");
      value = decodeURI(value);
    }
    if (typeof value === "undefined") {
      value = true;
    }
    if (
      typeof parseInt(value) === "number" &&
      !Object.is(parseInt(value), NaN)
    ) {
      value = parseInt(value);
    }

    if (urlObj[key]) {
      // 如果存在
      urlObj[key] = [urlObj[key], value];
    } else {
      // 如果不存在
      urlObj[key] = value;
    }
    // fakeArr.push(value);
  }
  return urlObj;
}

// "http://www.4399.com/?user=candidate&id=43&id=99&city=%E5%B9%BE%E5%B7%9E&enabled"

// 反思为什么当时没有做出来：
// -没有考虑数据是undefined,  认为所有都是字符串
//   - 没有利用typeof函数,
//   并且没有考虑typeof的输出是字符串类型
//   - 没有考虑数据是否满足if条件;
//   - NaN!==NaN 但是Object.is(NaN, NaN)是相等的
