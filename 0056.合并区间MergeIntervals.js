/**
56. 合并区间
中等
1.7K
相关企业
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

 

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。
 

提示：

1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
通过次数
557.6K
提交次数
1.1M
通过率
49.2%
 */

var merge = function (intervals) {
  if (intervals.length < 2) {
    return intervals;
  }
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let curr = intervals[0];
  let result = [];

  for (let interval of intervals) {
    if (curr[1] >= interval[0]) {
      curr[1] = Math.max(curr[1], interval[1]);
    } else {
      result.push(curr);
      curr = interval;
    }
  }

  if (curr.length !== 0) {
    result.push(curr);
  }

  return result;
};
