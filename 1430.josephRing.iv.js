/**
 * @param {number} n 人数
 * @param {number} m 出圈报数
 * @return {number[]}
 */
function josephRing(n, m) {
  if (n <= 1 || m < 1) {
    console.log(
      "you can't play Joseph's game. n must be bigger than 1, m must be bigger than 0"
    );
    return;
  }

  let r = 0;
  for (let i = 2; i <= n; i++) {
    //会先计算 n = 2 时的结果，最终得到的 r 就是胜利者
    r = (r + m) % i;
  }
  console.log(r + 1 + " is the winner.");
}

//测试上面的代码，并且打印执行的时间，如此可以与其他解决方案的执行时间相比较
let start = new Date().getTime();
josephRing(10000, 3);
let end = new Date().getTime();
console.log("====" + (end - start) + "====");
