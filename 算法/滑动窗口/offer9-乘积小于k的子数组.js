// 题目的链接
// https://leetcode.cn/problems/ZVAVXX/

// 子数组:连续,不可以改变元素的顺序

// 使用一个变量 curcur 记录当前窗口的乘积，使用两个变量 j 和 i分别代表当前窗口的左右端点。
// 当 cur >= k 时，我们考虑将左端点 j右移，同时消除原来左端点元素 nums[j] 对 cur 的贡献，直到 cur >= k不再满足，
// 这样我们就可以得到每个右端点 nums[i] 的最远左端点 nums[j]从而得知以 nums[i]为结尾（固定右端点）的合法子数组个数（左端点个数）为 i - j + 1
// 比如下面:
// 以10结尾 [10]
// 以5结尾  [5] [10,5]
// 以3结尾  [2] [5,2]
// 以6结尾  [6] [2,6] [5,2,6]

var numSubarrayProductLessThanK = function (nums, k) {
  let n = nums.length,
    ans = 0;
  if (k <= 1) return 0;
  for (let i = 0, j = 0, cur = 1; i < n; i++) {
    cur *= nums[i];
    while (cur >= k) {
      cur /= nums[j++];
    }
    // [j, ..., i]且“以j为结尾”的的子数组的为[i], [i - 1, i], ......, [j, j + 1, ... , i - 1, i]个数为i - j + 1
    // 因为j不重复，因此这么取的解也必然不重复
    ans += i - j + 1;
  }
  return ans;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
