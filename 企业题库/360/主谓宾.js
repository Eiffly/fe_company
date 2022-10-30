// let [n1, n2, n3] = readline().split(" ").map(Number);
// let zhu = new Array(n1);
// let wei = new Array(n2);
// let bin = new Array(n3);
// for (let i = 0; i < 3; i++) {
//   if (i === 0) {
//     zhu = readline().split(" ");
//   } else if (i === 1) {
//     wei = readline().split(" ");
//   } else if (i == 2) {
//     bin = readline().split(" ");
//   }
// }

let [n1, n2, n3] = [3, 3, 3];
let zhu = ["", "", ""];
let wei = ["", "", ""];
let bin = ["", "", ""];

let n1set = new Set(zhu);
let n2set = new Set(wei);
let n3set = new Set(bin);

let m = readline().split(" ").map(Number)[0];
let lines = [];
for (let i = 0; i < m; i++) {
  let line = readline().split(" ");
  lines.push(line);
}

for (const line of lines) {
  let flag = false;
  let result = true;
  if (!n1set.has(line[0])) {
    console.log("NO");
    continue;
  }
  for (let i = 1; i < line.length; i++) {
    let word = line[i];
    if (!flag && n1set.has(word)) {
      continue;
    } else if (!flag && n2set.has(word)) {
      flag = true;
    } else if (flag && n3set.has(word)) {
      continue;
    } else {
      result = false;
      break;
    }
  }
  if (result) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
