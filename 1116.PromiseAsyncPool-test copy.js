/*
function Scheduler() {
  this.list = [];
  this.add = function (promiseCreator) {
    this.list.push(promiseCreator);
  };

  this.maxCount = 2;

  var tempRunIndex = 0;

  this.taskStart = function () {
    for (var i = 0; i < this.maxCount; i++) {
      request.bind(this)();
    }
  };

  function request() {
    if (!this.list || !this.list.length || tempRunIndex >= this.maxCount) {
      return;
    }

    tempRunIndex++;
    this.list
      .shift()()
      .then(() => {
        tempRunIndex--;
        request.bind(this)();
      });
  }
}

function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

var scheduler = new Scheduler();

function addTask(time, order) {
  scheduler.add(() => timeout(time).then(() => console.log(order)));
}

addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);

scheduler.taskStart();
*/
/* */
class Scheduler {
  list = [];
  maxNum = 2;
  workNum = 0;
  add(promiseCreator) {
    this.list.push(promiseCreator);
  }
  start() {
    for (let i = 0; i < this.maxNum; i++) {
      this.doNext();
    }
  }
  doNext() {
    console.log(
      "--this.list.length--",
      this.list.length,
      this.workNum,
      this.maxNum
    );
    if (this.list.length && this.workNum < this.maxNum) {
      this.workNum++;
      // console.log(this.list.shift()());
      this.list
        .shift()()
        .then(() => {
          this.workNum--;
          this.doNext();
        });
    }
  }
}
const timeout = (time) => new Promise((resolve) => setTimeout(resolve, time));

const scheduler = new Scheduler();
// console.log(scheduler);
const addTask = (time, order) => {
  scheduler.add(() => {
    return timeout(time).then(() => {
      console.log(order);
    });
  });
  // scheduler.add(() => timeout(time).then(() => console.log(order)));
};
addTask(1000, 1);
addTask(500, 2);
addTask(300, 3);
addTask(400, 4);
scheduler.start();

/*
  script start
  async1 start
  async2
  promise1
  script end

  async1 end
  promise2
  setTimeout

*/

/*
  3
  7
  
  4

  5

  1

  6


*/
/*
  ES7
*/
/*
async function (poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    // console.log(JSON.stringify(p));
    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}

const timeout = (i) => {
  // console.error(i);
  return new Promise((resolve) => {
    console.error("-----", i);
    // return
    setTimeout(() => resolve(i), i);
  });
};

// console.error("----", asyncPool(2, [1000, 5000, 3000, 2000], timeout));
// await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
asyncPool(2, [1000, 5000, 3000, 2000], timeout);
*/
/*
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = [];
  const excuting = [];
  for (const item of array) {
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);
    if (poolLimit <= array.length) {
      const e = p.then(() => excuting.splice(excuting.indexOf(e), 1));
      excuting.push(e);
      if (excuting.length >= poolLimit) {
        await Promise.race(excuting);
      }
    }
  }
  return Promise.all(ret);
}
*/
/*
  ES6

function asyncPool(poolLimit, array, iteratorFn) {
  let i = 0;
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  const enqueue = function () {
    if (i === array.length) {
      return Promise.resolve();
    }
    const item = array[i++]; // 获取新的任务项
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p);

    let r = Promise.resolve();

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= poolLimit) {
        r = Promise.race(executing);
      }
    }

    // 正在执行任务列表 中较快的任务执行完成之后，才会从array数组中获取新的待办任务
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}
*/
