// 题目链接
//leetcode.cn/problems/longest-substring-without-repeating-characters/description/

//#region
var lengthOfLongestSubstring = function (s) {
  //求不含重复字符的最长子串
  if (s == "") return 0;
  let map = new Map();
  let max = 0,
    tmp = 0;
  let i = 0;
  for (let j = 0; j < s.length; j++) {
    //没有这个字符
    if (map.get(s[j]) === undefined) {
      map.set(s[j], j);
      tmp++;
    } else {
      max = Math.max(tmp, max);
      // 重新更新这个字符的索引
      // [移动头部]:如果当前字串已经包含了s[j]的数值,那么搜索应该使得字串刚好排除第一个重复的值
      i = Math.max(map.get(s[j]) + 1, i); //比如"abba" 我们选择应该选择后面的那个
      tmp = j - i + 1; //更新长度
      // [移动尾部]:只是修改不清空
      map.set(s[j], j);
    }
  }
  // 最后还是要做响应的处理
  max = Math.max(tmp, max);
  return max;
};
//#endregion

// 暴力求解: 会超出时间的限制
// function lengthOfLongestSubstring(s) {
//   let max = 0;
//   let tmp = 0;
//   let set = new Set();
//   for (let i = 0; i < s.length; i++) {
//     for (let j = 1; i + j <= s.length; j++) {
//       let substr = s.substring(i, i + j);
//       if ([...new Set(substr)].length === substr.length) {
//         max = Math.max(max, substr.length);
//       }
//     }
//   }
//   return max;
// }

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("b"));
console.log(lengthOfLongestSubstring("au"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("ohvhjdml"));
console.log(lengthOfLongestSubstring("aabaab!bb"));
console.log(lengthOfLongestSubstring("abba"));
