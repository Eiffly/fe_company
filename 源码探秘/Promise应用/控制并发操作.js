function requestWithLimit(apiList, runMax = 3, callback) {
  let map = new Map();
  let list = [...apiList];

  const run = () => {
    if (list.length) {
      let api = list.shift();
      return request(api).then((res) => {
        map.set(api, res);
        return run();
      });
    }
  };

  const promiseList = new Array(Math.min(apiList.length, runMax))
    .fill(Promise.resolve())
    .map((promise) => promise.then(run));

  return Promise.all(promiseList).then(() => {
    // callback();
    return apiList.map((c) => map.get(c));
  });
}
