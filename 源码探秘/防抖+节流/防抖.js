// 使用的过程
input.oninput = debounce(function () {
  console.log("我一直在输入哦");
}, 1000);

function debounce(fn, time) {
  let timer = null;
  return function () {
    let self = this;
    if (timer) window.clearTimeout(timer, time);
    timer = setTimeout(function () {
      fn.apply(self, arguments);
      timer = null;
    }, time);
  };
}
