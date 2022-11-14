//浅拷贝
//#region
// //方式一： arr.concat()
// var arr1 = [1, 2, 3, 4, [5, 6], { a: { b: 5 } }];
// var arr2 = arr1.concat();
// arr2[0] = 99;
// arr2[4][0] = 99;
// arr2[5].a.b = 99;
// console.log(arr1);
// console.log(arr2);

// // 方式二: arr.slice()
// var arr1 = [1, 2, 3, 4, [5, 6], { a: { b: 5 } }];
// var arr2 = arr1.slice();
// arr2[0] = 99;
// arr2[4][0] = 99;
// arr2[5].a.b = 99;
// console.log(arr1);
// console.log(arr2);

// // 方式三：...展开
// var arr1 = [1, 2, 3, 4, [5, 6], { a: { b: 5 } }];
// var arr2 = [...arr1];
// arr2[0] = 99;
// arr2[4][0] = 99;
// arr2[5].a.b = 99;
// console.log(arr1);
// console.log(arr2);
//#endregion

// 深拷贝
//#region
// // 深拷贝方式一
// var arr1 = [1, 2, 3, 4, [5, 6], { a: { b: 5 } }];
// var arr2 = JSON.parse(JSON.stringify(arr1));
// arr2[0] = 99;
// arr2[4][0] = 99;
// arr2[5].a.b = 99;
// console.log(arr1);
// console.log(arr2);
// // 深拷贝方式二
// function deepCopy(source) {
//   if (typeof source != "object" || source == null) {
//     return source;
//   }
//   var newObj = Array.isArray(source) ? [] : {}; //开辟一块新的内存空间
//   for (var i in source) {
//     newObj[i] = deepCopy(source[i]);
//   }
//   return newObj;
// }
// var arr1 = [1, 2, 3, 4, [5, 6], { a: { b: 5 } }];
// var arr2 = deepCopy(arr1);
// arr2[0] = 99;
// arr2[4][0] = 99;
// arr2[5].a.b = 99;
// console.log(arr1);
// console.log(arr2);
//#endregion
