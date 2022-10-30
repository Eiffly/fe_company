function deepClone(...args) {
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    arr.push(deep(args[i]));
  }
  return arr;
}
function deep(t) {
  let target = t;
  if (typeof target === "object" && target !== null) {
    const result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        result[key] = deep(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

function deepClone2(target) {
  if (typeof target === "object" && target !== null) {
    // 创建一个容器
    const result = Array.isArray(target) ? [] : {};
    // 遍历target
    for (let key in target) {
      // 检测该属性是否为对象本身的属性（不能拷贝原型对象上的属性）
      if (target.hasOwnProperty(key)) {
        result[key] = deepClone2(target[key]);
      }
    }
    return result;
  } else {
    return target;
  }
}

let obj1 = {
  a: {
    b: {
      c: {
        d: 0,
      },
    },
  },
};
let arr1 = [1, 2, [1, 3]];
console.log(deepClone(obj1, arr1));
