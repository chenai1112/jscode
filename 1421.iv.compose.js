function reduce(arr, cb, initialValue) {
  var num = initValue == undefined ? (num = arr[0]) : initValue;
  var i = initValue == undefined ? 1 : 0;
  for (i; i < arr.length; i++) {
    num = cb(num, arr[i], i);
  }
  return num;
}

// 注意，不要使用箭头函数，否则this会拿不到数组对象
Array.prototype.myReduce = function (fn, initData) {
  // 因为是数组调用reduce，所以this指向数组
  if (!this.length) return;

  let hasInit = initData !== undefined;
  let total = hasInit ? initData : this[0]; // 初始值，如果函数有设置则直接使用；没有设置则使用数组第1位作为初始值
  // 遍历数组，如果有初始值，从数组第1位开始计算；如果没有，从数组第2位开始计算
  for (let i = hasInit ? 0 : 1; i < this.length; i++) {
    total = fn(total, this[i], i, this);
  }
  return total;
};

let noInitRes = [1, 2, 3, 4].myReduce((a, b) => a + b);
let hasInitRes = [1, 2, 3, 4].myReduce((a, b) => a + b, 0);
console.log("noInitRes:", noInitRes); // 10
console.log("hasInitRes:", hasInitRes); // 10

const add1 = (x) => x + 1;
const mul2 = (x) => x * 2;
const div2 = (x) => x / 2;
div2(mul2(add1(1))); // 2

// 实现一个compose函数，实现以下功能
let operate = compose(div2, mul2, add1);
operate(1); // 2

// 解题思路，柯里化+reduce
function compose(...funcs) {
  return function (...args) {
    // 如果没有传入函数，直接返回参数
    if (funcs.length == 0) return args;
    if (funcs.length == 1) return funcs[0](...args);

    // 因为是要实现从右到左的计算，所以把数组逆序处理
    funcs = funcs.reverse();

    // 如果是多个，就是上个函数执行的输出结果是下个函数的输入
    return funcs.reduce((a, b, index) => {
      // console.log("index:", index)
      // 因为没有设初始值，所以方法1作为第一个a，数组从第2个方法下标1开始遍历，所以第一次结果应该返回a和b的计算结果，也就是 b(a(...args))
      // 此后，不用再做特殊处理，直接返回b(a)执行结果即可
      if (index === 1) {
        return b(a(...args));
      } else return b(a);
    });
  };
}
