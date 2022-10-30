// console.log("元".charCodeAt());
// console.log(escape("元"));
// console.log(parseInt("66", 8));
// console.log(parseInt("66px"));
// console.log(parseInt("66px", 9));
// console.log(parseInt("0x86", 9));

//下面的方法不
function sample(weight, k) {
  weight.sort((a, b) => b - a);
  if (weight.length == 0) {
    return 0;
  }
  let res = 0;
  let subArr = [];
  // 左边的指针
  for (let i = 0, j = 0; i < weight.length; i++) {
    subArr.push(weight[i]);
    while (Math.max(...subArr) - Math.min(...subArr) >= k) {
      j++;
      subArr.shift();
    }
    res = Math.max(res, i - j + 1);
  }
  return res;
}

// console.log(sample([1, 3, 1, 5, 3, 1], 3));
// console.log(sample([45, 6, 1, 9, 0, 2, 44], 30));

console.log([123, 34, 5, 1].sort());
