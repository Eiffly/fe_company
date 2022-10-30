Function.prototype.myApply = function (_this, args = []) {
  if (!_this) _this = Object.create(null);
  _this.fn = this;
  const res = _this.fn(...args);
  delete _this.fn;
  return res;
};
// 使用
function sum(a, b) {
  return this.v + a + b;
}
sum.myApply({ v: 1 }, [2, 3]); // 6
