/*
1.基本思想
将一个元素插入到其它已经有序的牌中的适当位置，因此其他所有元素在插入之前都向右移动一位，为新元素腾出空间。

2.特点
插入排序所需的时间取决于输入中元素的初始顺序，一个有序的序列比随机顺序的序列花费的时间更少。
对于随进排列的长度为N且主键不重复的数组，最坏情况下需要输入N2/2
*/

function insert(array) {
  for (var i = 1; i < array.length; i++) {
    var key = array[i];
    var j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = key;
  }
  return array;
}
