/**
20. 有效的括号
简单
3.6K
相关企业
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 

提示：

1 <= s.length <= 104
s 仅由括号 '()[]{}' 组成
通过次数
1.3M
提交次数
2.9M
通过率
44.4%
 */


var isValid = function (s) {
  const mappings = new Map();
  mappings.set("(", ")");
  mappings.set("[", "]");
  mappings.set("{", "}");

  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (mappings.has(s[i])) {
      stack.push(mappings.get(s[i]));
    } else {
      if (stack.pop() !== s[i]) {
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
};
