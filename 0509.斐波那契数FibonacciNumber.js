var fibonacci = (function () {
  var memory = {};
  return function (n) {
    if (n == 0 || n == 1) {
      return n;
    }
    if (memory[n - 2] === undefined) {
      memory[n - 2] = fibonacci(n - 2);
    }
    if (memory[n - 1] === undefined) {
      memory[n - 1] = fibonacci(n - 1);
    }
    return (memory[n] = memory[n - 1] + memory[n - 2]);
  };
})();
