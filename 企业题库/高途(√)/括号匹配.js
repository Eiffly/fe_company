/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stk = [];
  let map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      //   const element = array[i];
      if (!stk.length || stk[stk.length - 1] !== map.get(s[i])) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(s[i]);
    }
  }

  return !stk.length;
};
