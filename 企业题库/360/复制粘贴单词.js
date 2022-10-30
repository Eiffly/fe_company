// let num = parseInt(readline());

// for (let i = 0; i < num; i++) {
//   let str1 = readline();
//   let str2 = readline();
//   console.log(testCtrlCV(str1, str2));
// }

console.log(testCtrlCV("hello", "hello"));
console.log(testCtrlCV("hello", "helloo"));
console.log(testCtrlCV("hello", "hellloo"));
console.log(testCtrlCV("hello", "hlllloo"));
console.log(testCtrlCV("hello", "helo"));
function testCtrlCV(str1, str2) {
  let flag = true;
  if (str1.length > str2.length) {
    flag = false;
    return "NO";
  }
  //如果删除了单词或者添加了新的字母 错误
  if ([...new Set(str1)].length !== [...new Set(str2)].length) {
    flag = false;
    return "NO";
  }

  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
      j++;
    } else if (str1[i] !== str2[j] && i >= 1 && str2[j] == str1[i - 1]) {
      j++;
    } else {
      flag = false;
    }
  }
  return flag ? "YES" : "NO";
}
