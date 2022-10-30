// api接口请求列表
const apiList = [
  "url___A",
  "url___B",
  "url___C",
  "url___D",
  "url___E",
  "url___F",
  "url___G",
];

// 记录当前正在请求的接口，调试代码用
let currentRequestList = [];

// 模拟请求数据
const request = (api) => {
  console.log(`${api} 请求start`);
  // 请求时间 0 ~ 3 秒
  const wait = Math.random() * 3000;
  console.log(`${api} 请求时间 ${wait}`);
  // currentRequestList 收集正在请求的接口
  currentRequestList.push(api);
  // 满足限制条件时，控制台显示当前正在请求的接口
  if (currentRequestList.length === 2) {
    console.log("当前正在请求的接口 -> ", currentRequestList.toString());
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${api} 请求end`);
      // 请求完成时，currentRequestList 删除该请求
      const index = currentRequestList.findIndex((c) => c === api);
      currentRequestList.splice(index, 1);
      resolve(`获取接口“${api}”的数据`);
    }, wait);
  });
};

/**
 * @descriptio 并发请求且限制请求数量
 * @param {apiList} 请求接口列表
 * @param {limit} 限制请求接口的数量，默认每次最多发送3次请求
 * @param {callback} 回调函数
 */
// const requestWithLimit = (apiList, limit = 3, callback) => {
//   // 请求数量记录，默认为 0
//   let count = 0;

//   // 递归调用，请求接口数据
//   const run = () => {
//     // 接口每调用一次，记录数加 1
//     count++;
//     const api = apiList.shift();
//     request(api).then((res) => {
//       // 接口调用完成，记录数减 1
//       count--;
//       console.log(res);
//       // apiList 长度不为 0 且记录小于限制的数量时递归调用
//       if (apiList.length && count < limit) {
//         run();
//       }
//       // apiList 为空且记录数减为初始值 0 时调用回调函数
//       if (!apiList.length && !count) {
//         // 这里可以对所有接口返回的数据做处理，以便输出
//         callback("全部执行完毕！");
//       }
//     });
//   };

//   // 根据 limit 并发调用
//   for (let i = 0; i < limit; i++) {
//     run();
//   }
// };

/**
 * @description 限制并发请求
 * @param {apiList} 请求接口列表
 * @param {limit} 限制请求接口的数量，默认每次最多发送3次请求
 * @return { Promise<Array> } resList
 */
// 这里没有 callback 是因为返回的是 Promise 对象，其 then 方法取代了 callback
const requestWithLimit = (apiList, limit = 3) => {
  // apiList 的副本，避免 shift 方法对参数造成影响
  let list = [...apiList];
  // 用来记录api - response 的映射
  // 保证输出与输入顺序一致
  let map = new Map();
  // 递归调用
  const run = () => {
    if (list.length) {
      const api = list.shift();
      return request(api).then((res) => {
        map.set(api, res);
        return run();
      });
    }
  };
  // 当 apiList.length < limit 的时候，避免创建多余的 Promise
  const promiseList = Array(Math.min(apiList.length, limit))
    .fill(Promise.resolve())
    .map((promise) => promise.then(run));
  // promiseList有一个为resolve不会被释放,只有当全部的都是resolve才会被释放(在执行的过程中,是队列始终是pending状态)
  return Promise.all(promiseList).then(() => {
    return apiList.map((c) => map.get(c));
  });
};

requestWithLimit(apiList, 2).then((res) => {
  console.log("请求完毕:", res);
});
