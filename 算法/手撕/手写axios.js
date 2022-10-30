function asyncToGenerator(generatorFun) {
  return function () {
    return new Promise((resolve, reject) => {
      let gen = generatorFun(arguments);
      function step(keyword, arg) {
        let genRes;
        try {
          genRes = gen[keyword](arg);
        } catch (error) {
          console.log(error);
        }

        const { done, value } = genRes;
        if (done) {
          return resolve(value);
        } else {
          return Promise.resolve(value).then(
            (val) => {
              step("next", val);
            },
            (error) => {
              step("next", error);
            }
          );
        }
      }

      step("next");
    });
  };
}
function* testG() {
  // await被编译成了yield
  const data = yield getData();
  console.log("data: ", data);
  const data2 = yield getData();
  console.log("data2: ", data2);
  return "success";
}
function getData() {
  return new Promise((resolve) => setTimeout(() => resolve("data"), 1000));
}

//返回的是一个函数，执行这个返回的函数返回的是Promise对象
var test = asyncToGenerator(testG);
//因为返回的是Promise对象，意味着可以执行then方法
test().then((res) => console.log(res));
