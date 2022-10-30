function compareVersion(version1, version2) {
  // write code here
  const v1 =
    `${version1}`.split(".").length < 3
      ? `${version1}`.concat(".0")
      : `${version1}`;
  const v2 =
    `${version2}`.split(".").length < 3
      ? `${version2}`.concat(".0")
      : `${version2}`;

  function toNum(a) {
    const c = a.toString().split(".");
    const reset = ["", "0", "00", "000", "0000"],
      r = reset.reverse();
    for (let i = 0; i < c.length; i++) {
      const len = c[i].length;
      c[i] = r[len] + c[i];
    }
    return c.join("");
  }
  function checkPlugin(a, b) {
    let num1 = toNum(a);
    let num2 = toNum(b);
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 0;
    }
  }
  return checkPlugin(v1, v2);
}

console.log(compareVersion("0.1", "1.1"));
// console.log(compareVersion("0.1", "1.1"));
