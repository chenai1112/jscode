/**
509. 斐波那契数
斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0，F(1) = 1
F(n) = F(n - 1) + F(n - 2)，其中 n > 1
给定 n ，请计算 F(n) 。

 

示例 1：

输入：n = 2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1
示例 2：

输入：n = 3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2
示例 3：

输入：n = 4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3
 

提示：

0 <= n <= 30
通过次数496,953提交次数747,105
*/
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
