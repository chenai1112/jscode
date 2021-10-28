function pAll(_promises) {
  return new Promise((resolve, reject) => {
    // Iterable => Array
    const promises = Array.from(_promises);
    // 结果用一个数组维护
    const r = [];
    const len = promises.length;
    let count = 0;
    for (let i = 0; i < len; i++) {
      // Promise.resolve 确保把所有数据都转化为 Promise
      Promise.resolve(promises[i])
        .then((o) => {
          // 因为 promise 是异步的，保持数组一一对应
          r[i] = o;

          // 如果数组中所有 promise 都完成，则返回结果数组
          if (++count === len) {
            resolve(r);
          }
          // 当发生异常时，直接 reject
        })
        .catch((e) => reject(e));
    }
  });
}

const sleep = (seconds) =>
  new Promise((resolve) => setTimeout(() => resolve(seconds), seconds));

pAll([1, 2, 3]).then((o) => console.log(o));
pAll([sleep(3000), sleep(2000), sleep(1000)]).then((o) => console.log(o));
pAll([sleep(3000), sleep(2000), sleep(1000), Promise.reject(10000)])
  .then((o) => console.log(o))
  .catch((e) => console.log(e, "<- Error"));
