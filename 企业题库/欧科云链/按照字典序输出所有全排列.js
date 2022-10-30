function permuteUnique(nums) {
  // write code here
  nums = nums.sort();
  const res = [];
  const visited = new Array(nums.length).fill(false);
  const back = (index, perm) => {
    if (index === nums.length) {
      res.push(perm.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1])) {
        continue;
      }
      perm.push(nums[i]);
      visited[i] = true;
      back(index + 1, perm);
      visited[i] = false;
      perm.pop();
    }
  };

  back(0, []);
  return res;
}

console.log(permuteUnique([1, 223, 123, 111]));
// console.log(permuteUnique([1, 1, 2]));
// console.log(permuteUnique([0, 1]));
