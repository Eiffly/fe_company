let memo = [];
let data = [];
let rows;
let cows;
function findLongestPath(arr) {
  // write code here
  rows = arr.length;
  cows = arr[0].length;
  data = arr;
  memo = new Array(rows).fill(0).map((v) => new Array(cows).fill(0));
  let ans = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cows; j++) {
      // const element = array[j];
      let temp = dfs(i, j);
      if (temp > ans) {
        ans = temp;
      }
    }
  }
  return ans;
}

function dfs(i, j) {
  // if (i < 0 || i >= rows || j < 0 || j >= cows) {
  //   return 0;
  // }

  if (memo[i][j] !== 0) {
    return memo[i][j];
  }
  memo[i][j] = memo[i][j] + 1;
  let newI, newJ;
  newI = i - 1;
  newJ = j;
  update(newI, newJ, i, j);
  newI = i + 1;
  newJ = j;
  update(newI, newJ, i, j);
  newI = i;
  newJ = j - 1;
  update(newI, newJ, i, j);
  newI = i;
  newJ = j - 1;
  update(newI, newJ, i, j);
  return memo[i][j];
}

function update(newI, newJ, i, j) {
  if (
    newI >= 0 &&
    newI < rows &&
    newJ >= 0 &&
    newJ < cows &&
    data[newI][newJ] > data[i][j]
  ) {
    let temp = dfs(newI, newJ) + 1;
    if (temp > memo[i][j]) {
      memo[i][j] = temp;
    }
  }
  return memo[i][j];
}

console.log(
  findLongestPath([
    [1, 2, 3, 3, 2],
    [4, 3, 6, 3, 5],
    [5, 6, 4, 7, 2],
    [8, 7, 6, 3, 9],
    [9, 9, 10, 7, 2],
  ])
);
