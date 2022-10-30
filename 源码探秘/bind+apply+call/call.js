Function.prototype.myCall = function myCall(_this, ...arg) {
  if (!_this) {
    Object.create(null);
  }
  _this.fn = this;
  let res = _this.fn(...arg);
  delete _this.fn;
  return res;
};
function sum(a, b) {
  return this.v + a + b;
}

console.log(sum.myCall({ v: 1 }, 2, 3));
