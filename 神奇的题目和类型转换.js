/**
 * 对象的显示原型与隐式原型
 */
//#region
// var zero = {};
// var one = { x: 1 };
// var two = new Object();
// var three = null;
// console.log(zero.__proto__ === Object.prototype); //true
// console.log(one.__proto__ === Object.prototype); //true
// console.log(two.__proto__ === Object.prototype); //true
// // console.log(three.__proto__ === Object.prototype); //报错
// console.log(Object.prototype.prototype); //undefined(因为没有该属性)
// console.log(Object.prototype.__proto__); //null（因为定义为null）
//#endregion

/**
 * 普通对象
 */
//#region
// console.log({ x: 11 } instanceof Function); // false
// console.log({} instanceof Function); // false
// console.log(null instanceof Function); // false
// console.log(new Object() instanceof Function); // false
//#endregion

/**
 * 通过函数创建的对象
 */
//#region
// var fn0 = new Function();
// function fn1() {}
// console.log(Object instanceof Function); // true
// console.log(fn0 instanceof Function); // true
// console.log(fn1 instanceof Function); // true
//#endregion
