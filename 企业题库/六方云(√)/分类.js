function fenlei(arr) {
  let a = [];
  let b = [];
  for (const obj of arr) {
    for (const key in obj) {
      if (typeof obj[key] === "string" && obj[key].match(/^[0-9]$/)) {
        a.push(obj[key]);
      } else if (typeof obj[key] === "number") {
        console.log("hello");
        a.push(obj[key]);
      } else {
        b.push(obj[key]);
      }
    }
  }
  return [a, b];
}

const obj = [{ value: "1" }, { value: "css" }, { value: 1 }];
console.log(fenlei(obj));
