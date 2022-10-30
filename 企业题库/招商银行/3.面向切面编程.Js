Function.prototype.before = function (beforeFn) {
  let _this = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};
Function.prototype.after = function (afterFn) {
  let _this = this;
  return function () {
    let res = _this.apply(this, arguments);
    afterFn.apply(this, arguments);
    return res;
  };
};

// 测试用例
let func1 = () => console.log("func1");
func1 = func1
  .before(() => {
    console.log("====before====");
  })
  .before(() => {
    console.log("====before====");
  })
  .after(() => {
    console.log("====after====");
  })
  .before(() => {
    console.log("====before====");
  });

func1();
