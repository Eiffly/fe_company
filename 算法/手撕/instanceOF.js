function myInstanceOf(obj, Fn) {
  let tmpObj = obj.__proto__;
  while (tmpObj) {
    // 没有找到的时候，就一直往下寻找
    if (tmpObj === Fn.prototype) {
      return true;
    }
    // 往下寻找
    tmpObj = tmpObj.__proto__;
  }
  return false;
}
class A {}
let a = new A();
console.log(myInstanceOf(A, Function));
console.log(myInstanceOf(a, Function));
console.log(myInstanceOf(a, Object));
