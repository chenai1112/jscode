/**
 * @param {number} n 人数
 * @param {number} m 出圈报数
 * @return {number}
 */
function josephRing(n, m) {
  //当参数不满足条件时，这个游戏无法进行
  if (n <= 1 || m < 1) {
    console.log(
      "you can't play Joseph's game. n must be bigger than 1, m must be bigger than 0"
    );
    return;
  }

  let arr = new Array(n).fill(1); //长度为n的数组，位置从0——n-1，就代表了 n 个人的编号，并将数组所有元素设定为 1代表未出圈
  let count = 0; //纪录出圈人数
  let num = 0; //报数器

  //设定循环结束条件：当 count = n-1，即只剩下一个人的时候，游戏结束`
  while (count < n - 1) {
    for (let i = 0; i < arr.length; i++) {
      //第二层循环，循环数组
      if (arr[i] === 1) {
        //当这个位置的元素为 1 时，就执行接下来的代码
        num++; //每经过一个元素为 1 的位置时，就让报数器加 1
        if (num === m) {
          //当报数器等于 m 时，就执行接下来的代码
          arr[i] = 0; //让这个位置的元素为 0，表示这个位置已经出圈了
          count++; //纪录出圈人数的变量加 1
          num = 0; //将报数器清零
        }
        //当 m = 1 时，只有当 count = n 才会退出第二层循环（for循环），此时数组内的所有元素都变为了 0，为了避免这个问题，必须要有这个 if 判断句，达到特定条件时强制退出
        //其实当 m = 1时，结果就是 n，也可以将 m = 1 作为特殊情况来处理，即写在 while 循环以外，如此 m = 1 时就不会进入循环
        if (count === n - 1) {
          break;
        }
      }
    }
  }
  //找到数组中元素为 1 的位置，将这个位置输出
  let winner = arr.findIndex((item) => item === 1) + 1;
  console.log(`${winner} is the winner`);
}

//测试上面的代码，并且打印执行的时间，如此可以与其他解决方案的执行时间相比较
let start = new Date().getTime();
josephRing(10000, 3);
let end = new Date().getTime();
console.log("====" + (end - start) + "====");
