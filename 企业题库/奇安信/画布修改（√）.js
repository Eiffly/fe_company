function getWhiteCounts(rects) {
  if (rects.length === 0) {
    return 100 * 100;
  }
  // write code here
  let count = 0;
  let isBlack = new Array(100)
    .fill(false)
    .map((v) => new Array(100).fill(false));
  // 遍历每一次的操作i
  for (let index = 0; index < rects.length; index++) {
    let sub = rects[index];
    // 更改开始坐标和结束坐标
    let [x, y, dx, dy] = sub;
    let minx = Math.min(x, dx);
    let maxx = Math.max(x, dx);
    let miny = Math.min(y, dy);
    let maxy = Math.max(y, dy);

    console.log(x, y, dx, dy);
    // 遍历每个格子
    for (let i = minx; i < maxx; i++) {
      for (let j = miny; j < maxy; j++) {
        isBlack[i][j] = isBlack[i][j] === true ? false : true;
      }
    }
  }

  //   遍历所有的格子
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      // 如果是黑盒子
      if (isBlack[i][j] === true) {
        count++;
      }
    }
  }
  return 10000 - count;
}

console.log(
  getWhiteCounts([
    [0, 0, 1, 1],
    [4, 4, 2, 2],
  ])
);
console.log(
  getWhiteCounts([
    [0, 0, 1, 1],
    [4, 4, 0, 0],
    [0, 0, 1, 1],
  ])
);
