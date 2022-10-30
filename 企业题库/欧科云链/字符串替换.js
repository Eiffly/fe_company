// function formatString(str, arg) {
//   // write code here
//   let index = str.indexOf("%s");
//   let indexInArr = 0;
//   //   let res = "";
//   while (index !== -1) {
//     // replace 改变原数组？？？
//     console.log(111);
//     str = str.replace("%s", arg[indexInArr++]);
//     index = str.indexOf("%s", index + "%s".length);
//   }
//   if (indexInArr <= arg.length) {
//     str += arg.slice(indexInArr).join();
//   }

//   return str;
// }

function formatString(str, arg) {
  let i = 0;
  let k = 0;
  let n = str.length;
  let m = arg.length;
  let res = "";
  while (i < n) {
    if (str[i] === "%" && i + 1 < n && str[i + 1] === "s") {
      res += arg[k];
      ++k;
      i += 2;
    } else {
      res += str[i];
      ++i;
    }
  }

  while (k < m) {
    res += arg[k];
    ++k;
  }
  return res;
}
console.log(formatString("A%sC%sE", ["B", "D", "F"]));
