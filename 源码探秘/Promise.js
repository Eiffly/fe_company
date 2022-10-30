class Promise {
  // 构造方法
  constructor(excutor) {
    // 4.添加相应的属性
    this.PromiseState = "pending";
    this.PromiseResult = null;
    // 5.在构造函数中的this指的是Promise对象，因此指定this为self
    const self = this;
    //9.为异步任务添加相应的回调为一个空对象
    //10.由于有多个回调任务 这里需要改成相应的数组
    this.callbacks = [];
    // 3.添加resolve和reject函数
    function resolve(data) {
      // 7.状态只能够改变一次哦
      if (self.PromiseState !== "pending") return;
      // 5.以函数的形式调用的时候，认为this是Window，因此将this改为self
      self.PromiseState = "fulfilled";
      self.PromiseResult = data;
      //9.如果存在
      //10.回调有多个（因此需要进行多次的执行）
      setTimeout(function () {
        self.callbacks.forEach(
          (x) => x.onResolve(data) //因为是在原型链上，可以找到
        );
      });
    }
    function reject(data) {
      // 7.状态只能够改变一次哦
      if (self.PromiseState !== "pending") return;
      self.PromiseState = "rejected";
      self.PromiseResult = data;
      //9.如果存在
      //10.回调有多个（因此需要进行多次的执行）
      setTimeout(function () {
        self.callbacks.forEach(
          (x) => x.onRejected(data) //因为是在原型链上，可以找到
        );
      });
    }
    // 2.添加同步调用（excutor中的内容不会被马上放到回调队列中去）
    // 6.引起状态改变的三种方式有 resolve reject throw 因此需要添加try catch
    try {
      excutor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  //实例函数的方法
  then(onResolve, onRejected) {
    const self = this;
    // 13.异常穿透
    if (typeof onRejected !== "function") {
      onRejected = (reason) => {
        throw reason;
      };
    }
    if (typeof onResolve !== "function") {
      onResolve = (value) => value;
    }
    //11.同步修改状态：因为最后返回的是一个Promise的对象，return返回的也必须是Promise
    return new Promise((resolve, reject) => {
      // 12.创建回调函数进行相应的代码优化
      function callback(type) {
        try {
          let res = type(self.PromiseResult);
          // 改变相应的状态
          if (res instanceof Promise) {
            //如果是 Promise 类型的对象
            res.then(
              (v) => {
                resolve(v);
              },
              (r) => {
                reject(r);
              }
            );
          } else {
            resolve(res);
          }
        } catch (error) {
          reject(error);
        }
      }

      //8.then方法执行回调
      if (this.PromiseState === "fulfilled") {
        setTimeout(() => {
          callback(onResolve);
        });
      }
      if (this.PromiseState === "rejected") {
        setTimeout(() => {
          callback(onRejected);
        });
      }
      // 9.异步任务then方法的调用
      if (this.PromiseState === "pending") {
        //指定相应的回调
        //10.回调有多个（指定的是一个回调队列）
        this.callbacks.push({
          onResolve: function () {
            callback(onResolve);
          },
          onRejected: function () {
            callback(onRejected);
          },
        });
      }
    });
  }

  //13.catch方法和异常穿透
  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  //14.添加resolve方法
  static resolve(value) {
    return new Promise((resolve, reject) => {
      if (value instanceof Promise) {
        value.then(
          (v) => resolve(v),
          (r) => reject(value)
        );
      } else {
        resolve(value);
      }
    });
  }

  //15.添加reject方法
  static reject(reason) {
    return new Promise((resolve, reject) => {
      reject(reason);
    });
  }
  //16.添加all方法
  //关于延迟问题
  //在延迟函数里面的那个是pending状态 但是添加到了相应的回调队列中去了
  //在延迟了1s之后，执行resolve方法（状态变为了fulfilled，结果变为data，
  //最最重要的是执行了回调队列里面的函数，并且此时的i仍旧为0）
  static all(promises) {
    return new Promise((resolve, reject) => {
      let count = 0;
      let arr = [];
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            arr[i] = v;
            count++;
            if (count === promises.length) {
              resolve(arr); //如果正确 最后返回的是所有的结果
            }
          },
          (r) => {
            reject(r); //如果错误 最后后只返回错误的那个结果
          }
        );
      }
    });
  }

  //17.添加race方法
  //第一个为pending状态 添加完回调队列之后直接返回
  //第二个为fulfilled状态 回去执行相应的resolve方法，并且只执行一次
  static race(promises) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (v) => {
            resolve(v); //如果正确，返回先执行的那个结果（并且状态只会改变一次）
          },
          (r) => {
            reject(r); //如果错误 最后只返回错误的那个结果，并且状态只会改变一次
          }
        );
      }
    });
  }
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
    reject("Eror");
  }, 1000);
});

p1.then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.warn(reason);
  }
);

console.log(Promise.resolve("PK"));
