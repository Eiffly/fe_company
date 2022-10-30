/**
 * 方法一： 用async-await的方法
 * @param {*} color
 * @param {*} time
 * @returns
 */
function light(color, time) {
  return new Promise((resolve, reject) => {
    console.log(`当前的灯是${color},${time}s之后变`);
    setTimeout(() => {
      resolve();
    }, time * 1000);
  });
}

async function shine() {
  await light("red", 3);
  await light("green", 1);
  await light("yellow", 6);
  shine();
}

shine();
