let n = parseInt(readline()); //确定行数

for (let i = 0; i < n; i++) {
  let str = readline();
  print(illWord(str));
}

function illWord(str) {
  // str.test()
  if (str.match(/^[A-Z]{1}[a-z]*$/)) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(illWord("yeerV"));
console.log(illWord("Ophu"));
// console.log(illWord());
// console.log(illWord());
