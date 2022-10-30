Function.prototype.myBind = function (_this, ...args1) {
  const fn = this;
  return function F(...args2) {
    return this instanceof F
      ? new fn(...args1, ...args2)
      : fn.call(_this, ...args1, ...args2);
  };
};
