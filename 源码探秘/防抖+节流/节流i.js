button.onclick = throttle(function () {
  span.innerHTML = count++;
}, 1000);

function throttle(fn, time) {
  let isTrue = true;
  return function () {
    if (isTrue) {
      fn.apply(this, arguments);
      isTrue = false;
      setTimeout(() => (isTrue = true), time);
    }
  };
}
