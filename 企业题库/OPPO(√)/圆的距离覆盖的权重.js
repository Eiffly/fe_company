// 获取输入;
let [n, x] = readline().split(" ").map(Number);
let data = new Array(n).fill(0);
for (let i = 0; i < n; i++) {
  data[i] = readline().split(" ").map(Number);
}

// let data = [
//   [0, 1, 2],
//   [-1, 1, 3],
//   [3, 3, 2],
//   [-4, 3, 1],
//   [5, -3, 1],
// ];
// n = 5;
// x = 10;
let res = calc(n, x, data);
console.log(res);

function calc(n, x, data) {
  for (let i = 0; i < n; i++) {
    let value = data[i][0] * data[i][0] + data[i][1] * data[i][1];
    data[i].push(value);
  }

  //按照距离排序(升序)
  data = data.sort((a, b) => b[3] - a[3]);
  //   console.log(data);

  //
  let sum = 0;
  let dist = 0;
  let index = 0;
  while (index < n) {
    if (dist * dist >= data[index][3]) {
      sum += data[index][2];
      index++;
    } else {
      dist++;
    }
    if (sum >= x) {
      return dist;
    }
  }
  //没有答案
  return -1;
}
