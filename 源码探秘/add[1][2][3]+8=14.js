// add[1][2][3]+8=14
// add[4][5] -3=6

let obj = { sum: 0 };
let add = new Proxy(obj, {
  get: function (target, property, receiver) {
    if (property === Symbol.toPrimitive) {
      let tmp = target.sum;
      target.sum = 0;
      return () => tmp;
    } else {
      target.sum += parseInt(property);
      return receiver;
    }
  },
});

// 加号可以触发隐式类型转换
console.log(add[1][2][3] + 8); //14
console.log(add[4][5] + [1, 2, 3]); //"91,2,3" 是因为如果有一个不是基本数据类型的话，按照[]的转换规则 valueOf-toString

// 减号也可以触发隐式类型转换
console.log(add[4][5] - 3); //6
console.log(add[4][5] - ""); //9
console.log(add[4][5] - null); //9
console.log(add[4][5] - false); //9
console.log(add[4][5] - true); //8
console.log(add[4][5] - "123"); //-114
console.log(add[4][5] - undefined); //NaN
console.log(add[4][5] - "123px"); //NaN

// !
console.log(!add[1][2][3]); //先{ sum: 6 } !转为布尔型
