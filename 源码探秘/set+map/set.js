// const set1 = new Set();

// set1.add(42);
// set1.add(42);
// set1.add(13);
// console.log(set1.keys());    //[Set Iterator] { 42, 13 }
// console.log(set1.values());  //[Set Iterator] { 42, 13 }

const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});
console.log(set1);


function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}
new Set(['foo', 'bar', undefined]).forEach(logSetElements);
// expected output: "s[foo] = foo"
// expected output: "s[bar] = bar"
// expected output: "s[undefined] = undefined"