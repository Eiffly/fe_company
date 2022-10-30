// 虽然这道题看着像是全排列
// 但是不是，因为考虑到序列，是有序的
// 最后实现的效果是【递归】哦

// let nums = [1, 4, 3, 2],  k = 3;

let nums = [1, 2, 3, 5],
  k = 5;
function calc(cur_sum, i) {
  if (i >= nums.length) {
    return 0;
  }

  let res = 0;
  if ((cur_sum * 10 + nums[i]) % k === 0) {
    res = 1; //把这个数放到末尾，查看是否符合条件
  }
  const _kSum1 = calc(cur_sum, i + 1); //不要i的数，往下递归
  const _kSum2 = calc(cur_sum * 10 + nums[i], i + 1); //要第i位的数，往下递归
  return res + _kSum1 + _kSum2;
}

console.log(calc(0, 0));
