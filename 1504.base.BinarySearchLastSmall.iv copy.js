/**
 * 二分查找，查找最后一个小于等于给定值的元素
 * 数组必须有序，存在重复
 * @param {array} arr 待排序数组
 * @param {number} target 目标数据
 */
function BinarySearchLastSmall(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
    // 中间下标
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if (arr[midIndex] <= target) {
      // 如果 midIndex 最后一个或者后一个数大于 target 那么找到最后一个小于等于给定值的元素，直接返回
      if (midIndex === arr.length - 1 || arr[midIndex + 1] > target)
        return midIndex;
      // 否则低位下标为中位下标加1
      lowIndex = midIndex + 1;
    } else {
      highIndex = midIndex - 1;
    }
  }
  return -1;
}

// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 11, 11, 11, 42, 44, 54, 56, 77, 102];
console.log(BinarySearchLastSmall(arr, 12));
console.log(BinarySearchLastSmall(arr, 44));
console.log(BinarySearchLastSmall(arr, 1));
console.log(BinarySearchLastSmall(arr, 102));
console.log(BinarySearchLastSmall(arr, 1111));
