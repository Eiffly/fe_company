// 统计字符串子串
// 传入的参数有三个 isChildren(需要探索的串, 子串,isTrue=true);
// 返回的参数是数字

// 子串如果为0    最后返回的是0
// isTrue为true  表示重复查找，否则重复查找，比如aaa寻找aa，true的话是2
// isTrue为false 表示不重复查找，否则重复查找，比如aaa寻找aa，true的话是1
function isChildren(str, substr, isTrue = true) {
  let res = 0;
  let index = str.indexOf(substr);
  if (substr === "") {
    return 0;
  }
  while (index !== -1) {
    res++;
    index = str.indexOf(
      substr,
      isTrue === true ? index + 1 : index + substr.length
    );
  }
  return res;
}
console.log(isChildren("aaa", "aa"));
console.log(isChildren("aaa", "aa", false));
console.log(isChildren("aaa", "", false));
console.log(isChildren("iaonmshuhidsaodaojs", "ao", false));
