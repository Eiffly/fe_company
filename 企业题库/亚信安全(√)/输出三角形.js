//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

console.log(toTriAngle(4));
function toTriAngle(num) {
  for (let i = 1; i <= num; i++) {
    let arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push(j);
    }
    console.log(arr.join(" "));
  }
}
