/**
73. 矩阵置零
中等
800
相关企业
给定一个 m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。

 

示例 1：


输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]
输出：[[1,0,1],[0,0,0],[1,0,1]]
示例 2：


输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

提示：

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
 

进阶：

一个直观的解决方案是使用  O(mn) 的额外空间，但这并不是一个好的解决方案。
一个简单的改进方案是使用 O(m + n) 的额外空间，但这仍然不是最好的解决方案。
你能想出一个仅使用常量空间的解决方案吗？
通过次数
221.7K
提交次数
354.7K
通过率
62.5%
 */


var setZeroes = function (matrix) {
  let firstColHasZero = false;
  let firstRowHasZero = false;
  // 检查第一列是否有0
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
    }
  }
  // 检查第一行是否有0
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      firstRowHasZero = true;
    }
  }
  // 使用第一行和第一列，来标记其余行列是否含有0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  // 接下来，利用第一行和第一列的标0情况，将matrix中的数字标0
  for (let row = 1; row < matrix.length; row++) {
    for (let col = 1; col < matrix[0].length; col++) {
      if (matrix[row][0] === 0 || matrix[0][col] === 0) {
        matrix[row][col] = 0;
      }
    }
  }
  // 最后，处理第一行和第一列
  // 如果firstColHasZero等于true,将第一列全设为0
  if (firstColHasZero) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }
  // 如果firstRowHasZero等于true,将第一行全设为0
  if (firstRowHasZero) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[0][i] = 0;
    }
  }

  return matrix;
};
