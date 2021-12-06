/**
 * 二分查找，查找最后一个值等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchLast(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (target < arr[midIndex]) {
      highIndex = midIndex - 1;
    } else if (target > arr[midIndex]) {
      lowIndex = midIndex + 1;
    } else {
      // 当 target 与 arr[midIndex] 相等的时候，如果 midIndex 为0或者后一个数不等于 target 那么就找到了最后一个等于给定值的元素，直接返回
      // 这里不能取a rr[midIndex + 1] > target 可能会存在边界问题
      if (midIndex === 0 || arr[midIndex + 1] !== target) return midIndex;
      // 否则低位下标为中间下标加1，继续查找
      lowIndex = midIndex + 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchLast(arr, 11));
console.log(BinarySearchLast(arr, 44));
console.log(BinarySearchLast(arr, 1));
console.log(BinarySearchLast(arr, 102));
console.log(BinarySearchLast(arr, 1111));
