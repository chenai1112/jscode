/**
844. 比较含退格的字符串
给定 s 和 t 两个字符串，当它们分别被输入到空白的文本编辑器后，如果两者相等，返回 true 。# 代表退格字符。

注意：如果对空文本输入退格字符，文本继续为空。

 

示例 1：

输入：s = "ab#c", t = "ad#c"
输出：true
解释：s 和 t 都会变成 "ac"。
示例 2：

输入：s = "ab##", t = "c#d#"
输出：true
解释：s 和 t 都会变成 ""。
示例 3：

输入：s = "a#c", t = "b"
输出：false
解释：s 会变成 "c"，但 t 仍然是 "b"。
 

提示：

1 <= s.length, t.length <= 200
s 和 t 只含有小写字母以及字符 '#'
 

进阶：

你可以用 O(n) 的时间复杂度和 O(1) 的空间复杂度解决该问题吗？
通过次数181,192提交次数374,525
*/
var backspaceCompare = function (S, T) {
  let i = S.length - 1,
    j = T.length - 1;
  let backspaceS = 0,
    backspaceT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (S[i] === "#") {
        backspaceS++;
        i--;
      } else if (backspaceS > 0) {
        backspaceS--;
        i--;
      } else {
        break;
      }
    }

    while (j >= 0) {
      if (T[j] === "#") {
        backspaceT++;
        j--;
      } else if (backspaceT > 0) {
        backspaceT--;
        j--;
      } else {
        break;
      }
    }

    if (S[i] !== T[j]) {
      return false;
    }
    if ((i < 0 && j > 0) || (i > 0 && j < 0)) {
      return false;
    }
    i--;
    j--;
  }

  return true;
};
