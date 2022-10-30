const array = [1, 2, 3, 4];
// 6秒输出4 1s后输出3 1s后输出2 1s后输出1
(async () => {
  array.forEach(async (element) => {
    const result = await new Promise((res) =>
      setTimeout(() => {
        res(element);
      }, (10 - element) * 1000)
    );
    console.log(result);
  });
})();

// 9秒后输出1 然后8秒输出2 7秒输出3 6秒输出4
(async () => {
  for (let index = 0; index < array.length; index++) {
    const result = await new Promise((res) =>
      setTimeout(() => {
        res(array[index]);
      }, (10 - array[index]) * 1000)
    );
    console.log(result);
  }
})();
