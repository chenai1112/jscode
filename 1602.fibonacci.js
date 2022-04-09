// let arr = [];
// let result = [1];
// function fibonacci(num) {
//   if (num === 1 || num === 2) {
//     return 1;
//   }
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// console.log(fibonacci(10));

// let fibonacci = (function () {
//   let memo = [0, 1];
//   return function fib(num) {
//     if (memo[num] === undefined) {
//       memo[num] = fib(num - 1) + fib(num - 2);
//     }
//     return memo[num];
//   };
// })();
// console.log(fibonacci(10));

let fi = (function fibonacci() {
  let memo = [0, 1];
  return function fib(num) {
    if (memo[num] === undefined) {
      memo[num] = fib(num - 1) + fib(num - 2);
    }
    return memo[num];
  };
})();
console.log(fi(10));
