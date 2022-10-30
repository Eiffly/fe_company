// 有n个座位，m条规定
// 每条规定l到r只能坐x个人
// 求最多可以坐下几个人

// 输入1：
//m=3 n=10
// let arr = [
//   [1, 4, 2],
//   [3, 6, 2],
//   [10, 10, 1],
// ];

// 输入2：
// let arr1 = [
//   [2, 3, 1],
//   [1, 4, 2],
//   [1, 2, 1],
//   [1, 3, 3],
//   [7, 9, 2],
// ];

function sate(m, n, newArr) {
  // 1.先整理座位
  newArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let dp = new Array(n + 1).fill(0);
  return newArr;
}

// function merge(m, newArr) {
//   // 2.合并有交叉关系的座位
//   let tempStart = newArr[0][0];
//   let tempFilArr = newArr.filter((v) => v[0] == 1);
//   tempFilArr = tempFilArr.concat(
//     newArr
//       .slice(tempFilArr.length)
//       .filter((v) => v[0] <= tempFilArr[tempFilArr.length - 1][1]) //合并有些相同的区间
//   );
//   tempFilArr.sort((a, b) => a[1] - b[1]);
//   console.log(tempFilArr);
//   let endArr = [];
//   // 区间的族最大数值是
//   tempFilArr.forEach((e) => {
//     endArr.push(e[1]);
//   });
//   let tempEnd = Math.max(...endArr);
//   // let seat = Number.MAX_VALUE;
//   //区间的合并
//   for (let i = 0; i < tempFilArr.length; i++) {
//     seat = Math.min(tempFilArr[i][1] - tempFilArr[i][0] + 1, tempFilArr[i][2]);
//   }
//   return tempEnd;
// }
console.log(sate(3, 10, arr1));

// 合并座位
function merge(index, newArr) {
  for (let i = index; i < array.length; i++) {
    const element = array[i];
    condition;
  }
}
