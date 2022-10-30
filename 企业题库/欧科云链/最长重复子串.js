function solve(a) {
  // write code here
  let len = parseInt(a.length / 2);
  while (len > 0) {
    let index = 0;
    while (index <= a.length - len * 2) {
      if (
        a.slice(index, index + len) === a.slice(index + len, index + len * 2)
      ) {
        return len * 2;
      }
      index++;
    }
    len--;
  }
  return len;
}
console.log(solve("ababc"));
console.log(solve("abcab"));
// console.log(solve("ababc"));
