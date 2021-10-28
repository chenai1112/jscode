/*
1.基本思想
找到数组最小的元素，将它和数组红第一个元素交换位置，接下来，在剩下的元素中找到最小的元素，将它与数组的第二个元素交换位置，往复如此，直到将整个数组排序。基本点就是不断地选择剩余元素之中的最小者。

2.特点
运行时间和输入无关。
对于长度为N的数组，选择排序需要大约N2/2次比较和N次交换

数据移动是最少的
交换次数和数组的大小是线性关系。
*/

let sortArray = function (nums) {
  let count = 0,
    sorted = true;
  for (let i = nums.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      count++;
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) {
      break;
    }
  }
  console.log(count);
  return nums;
};
