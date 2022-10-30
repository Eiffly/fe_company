/**
 * 方法二： 用Promise的方法
 * @param {*} color
 * @param {*} time
 * @returns
 */

function red() {
  return new Promise((resolve, reject) => {
    console.log(`当前的灯是红灯,3s之后变成绿灯`);
    setTimeout(() => {
      resolve(green());
    }, 3000);
  });
}

function green() {
  return new Promise((resolve, reject) => {
    console.log(`当前的灯是绿灯,1s之后变成红灯`);
    setTimeout(() => {
      resolve(yellow());
    }, 1000);
  });
}

function yellow() {
  return new Promise((resolve, reject) => {
    console.log(`当前的灯是黄灯,6s之后变成红灯`);
    setTimeout(() => {
      resolve(red());
    }, 6000);
  });
}
red();
