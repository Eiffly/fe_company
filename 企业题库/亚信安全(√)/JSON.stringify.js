// console.log({ a: "1" });

function JSONcopy(a) {
  let b;
  if (a.includes("{") || a.includes("[")) a = JSON.parse(a);

  // 如果是字符串
  if (typeof a === "string") {
    b = a;
    // console.log("string");
    return b;
  } else if (typeof a === "object") {
    b = JSON.parse(JSON.stringify(a));
    // console.log("object");
    return JSON.stringify(b);
  }

  // return b;
}
console.log(JSONcopy("[100,2,309]"));
console.log(JSONcopy("sahohoas"));
// console.log(JSON.stringify(JSON.parse("[100,2,309]")));
