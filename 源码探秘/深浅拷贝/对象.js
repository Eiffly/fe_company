// 深拷贝方式一：强行parse(并不完善)
// var obj1 = {
//   a: "1",
//   b: "2",
//   c: {
//     aa: 1,
//     bb: 2,
//     cc: 3,
//   },
//   d: undefined,
//   e() {
//     console.log("拷贝后我还会存在嘛");
//   },
//   f: Symbol("我是唯一的"),
// };
// var obj2 = JSON.parse(JSON.stringify(obj1));
// obj2.a = 99;
// obj2.c.aa = 99;
// console.log(obj1);
// console.log(obj2);

// 深拷贝方式二：手写deepCopy
function deepCopy(source) {
  if (typeof source != "object" || source == null) {
    return source;
  }
  var newObj = Array.isArray(source) ? [] : {}; //开辟一块新的内存空间
  for (var i in source) {
    newObj[i] = deepCopy(source[i]);
  }
  return newObj;
}
var obj1 = {
  a: "1",
  b: "2",
  c: {
    aa: 1,
    bb: 2,
    cc: 3,
  },
  d: undefined,
  e() {
    console.log("拷贝后我还会存在嘛");
  },
  f: Symbol("我是唯一的"),
};
var obj2 = deepCopy(obj1);
obj2.a = 99;
obj2.c.aa = 99;
console.log(obj1);
console.log(obj2);

//浅拷贝方式1： Object.assign({}, obj1);
// var obj1 = {
//   a: "1",
//   b: "2",
//   c: {
//     aa: 1,
//     bb: 2,
//     cc: 3,
//   },
//   d: undefined,
//   e() {
//     console.log("拷贝后我还会存在嘛");
//   },
//   f: Symbol("我是唯一的"),
// };
// var obj2 = {};
// var obj2 = Object.assign(obj2, obj1);
// obj2.a = 99;
// obj2.c.aa = 99;
// console.log(obj1);
// console.log(obj2);

//浅拷贝方式2： var obj2 = c;
// var obj1 = {
//   a: "1",
//   b: "2",
//   c: {
//     aa: 1,
//     bb: 2,
//     cc: 3,
//   },
//   d: undefined,
//   e() {
//     console.log("拷贝后我还会存在嘛");
//   },
//   f: Symbol("我是唯一的"),
// };
// var obj2 = { ...obj1 };
// obj2.a = 99;
// obj2.c.aa = 99;
// console.log(obj1);
// console.log(obj2);

//浅拷贝方式3: forin遍历
// var obj1 = {
//   a: "1",
//   b: "2",
//   c: {
//     aa: 1,
//     bb: 2,
//     cc: 3,
//   },
//   d: undefined,
//   e() {
//     console.log("拷贝后我还会存在嘛");
//   },
//   f: Symbol("我是唯一的"),
// };
// var obj2 = {};
// for (var key in obj1) {
//   obj2[key] = obj1[key];
// }
// obj2.a = 99;
// obj2.c.aa = 99;
// console.log(obj1);
// console.log(obj2);

//浅拷贝方式4: 修改是无效的
// var obj1 = {
//   a: "1",
//   b: "2",
//   c: {
//     aa: 1,
//     bb: 2,
//     cc: 3,
//   },
//   d: undefined,
//   e() {
//     console.log("拷贝后我还会存在嘛");
//   },
//   f: Symbol("我是唯一的"),
// };
// // var obj2 ={}；
// var obj2 = {};
// for (var key in obj1) {
//   obj2[key] = obj1[key];
// }
// // 注意这里的修改是无效的
// obj2.a = 99;
// obj2.c.aa = 99;
// console.log(obj1);
// console.log(obj2);
