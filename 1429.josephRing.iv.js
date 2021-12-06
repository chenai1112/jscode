/**
 * @param {number} n 人数
 * @param {number} m 出圈报数
 * @return {number}
 */
let count = 0; //纪录出圈人数
let num = 0; //报数器
function josephRing(n, m, arr) {
  //当参数不满足条件时，这个游戏无法进行
  if (n <= 1 || m < 1) {
    console.log(
      "you can't play Joseph's game. n must be bigger than 1, m must be bigger than 0"
    );
    return;
  }
  //初始调用，创建长度为n的数组，位置从0——n-1，就代表了 n 个人的编号，并将数组所有元素设定为 1代表未出圈
  if (!arr) {
    arr = new Array(n).fill(1);
  }
  //设定递归结束条件：当 count = n-1，即只剩下一个人的时候，游戏结束，返回胜者
  if (count === n - 1) {
    let winner = arr.findIndex((item) => item === 1) + 1;
    console.log(`${winner} is the winner`);
    return;
  }
  // 循环数组，出圈更改状态
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      //当这个位置的元素为 1 时，就执行接下来的代码
      num++; //每经过一个元素为 1 的位置时，就让报数器加 1
      if (num === m) {
        //当报数器等于 m 时，就执行接下来的代码
        arr[i] = 0; //让这个位置的元素为 0，表示这个位置已经出圈了
        count++; //纪录出圈人数的变量加 1
        num = 0; //将报数器清零
      }
    }
  }
  // 递归调用
  josephRing(n, m, arr);
}

//测试上面的代码，并且打印执行的时间，如此可以与其他解决方案的执行时间相比较
let start = new Date().getTime();
josephRing(10000, 3);
let end = new Date().getTime();
console.log("====" + (end - start) + "====");
