/**
394. 字符串解码
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

 

示例 1：

输入：s = "3[a]2[bc]"
输出："aaabcbc"
示例 2：

输入：s = "3[a2[c]]"
输出："accaccacc"
示例 3：

输入：s = "2[abc]3[cd]ef"
输出："abcabccdcdcdef"
示例 4：

输入：s = "abc3[cd]xyz"
输出："abccdcdcdxyz"
 

提示：

1 <= s.length <= 30
s 由小写英文字母、数字和方括号 '[]' 组成
s 保证是一个 有效 的输入。
s 中所有整数的取值范围为 [1, 300] 
通过次数220,356提交次数387,443
*/

/*
Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
Example 3:

Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
Example 4:

Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
*/
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  String.prototype.repeat = function (n) {
    var _this = this;
    var result = "";
    for (var i = 0; i < n; i++) {
      result += _this;
    }
    return result;
  };
  var len = s.length;
  var stack = [];
  var readytp = 1;
  var strstack = [];
  var count = 0;
  var ret = "";
  for (var i = 0; i < len; i++) {
    var cur = s.charAt(i);
    if (Number(cur) || Number(cur) === 0) {
      if (readytp) {
        stack.push(0);
        readytp = 0;
      }
      repeatnum = stack[stack.length - 1];
      repeatnum = repeatnum * 10 + Number(cur);
      stack[stack.length - 1] = repeatnum;
      //console.log(stack);
    } else {
      readytp = 1;
      if (cur == "[") {
        count++;
        strstack.push("");
        continue;
      }
      if (cur == "]") {
        count--;
        var str = strstack.pop();
        var num = stack.pop();
        str = str.repeat(num);
        count === 0 ? (ret += str) : (strstack[strstack.length - 1] += str);
        continue;
      }
      count === 0 ? (ret += cur) : (strstack[strstack.length - 1] += cur);
    }
  }
  return ret;
};

let s1 = "3[a]2[bc]";
// Output: "aaabcbc"

let s2 = "3[a2[c]]";
// Output: "accaccacc"

let s3 = "2[abc]3[cd]ef";
// Output: "abcabccdcdcdef"

let s4 = "abc3[cd]xyz";
// Output: "abccdcdcdxyz"
console.log("s1:", decodeString(s1));
console.log("s2:", decodeString(s2));
console.log("s3:", decodeString(s3));
console.log("s4:", decodeString(s4));

/**
 * 答案一：健壮模式
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *      编码规则是`count[str]`，将str的内容count次输出，
        count是>=0的整数，str是由字母组成
 * 示例：
 * const s = '2[x2[y]]'; convertString(str); // 返回'yyxyyx'
 * const s = '2[x]2[y]'; convertString(str); // 返回'xxyy'
 * 附件题[可选]:
 * 1）括号中可能出现无内容的情况: 'a2[]b' => 'ab'
 * 2) str由字母或数字组成: '2[13]' => '1313'
 * 3) 会存在左括号前不是数字的情况: 'a[bc]' => 'abc'
 * 4) 括号未配对时抛出异常
 */

function convertString(str) {
  const TYPES = {
    NU: "NUMBER",
    CH: "CHAR",
    LB: "LEFT_BRACKET",
    RB: "RIGHT_BRACKET",
    "[": "LEFT_BRACKET",
    "]": "RIGHT_BRACKET",
  };

  const { NU, CH, LB, RB } = TYPES;
  const type = (str) => TYPES[str[0]] || (isNaN(str[0]) ? CH : NU);
  const stack = [];
  let tmp = "";
  let prevType = null;
  str.split("").forEach((ch) => {
    const t = type(ch);
    if (tmp && t !== prevType) {
      stack.push(tmp);
      tmp = "";
    }
    // 出栈配对
    if (t === RB) {
      let str = "";
      let lb = stack.pop();
      while (lb !== "[") {
        if (!lb) throw new Error("括号未配对");
        str = `${lb}${str}`;
        lb = stack.pop();
      }
      const num = stack.pop();
      if (+num >= 0) {
        stack.push(str.repeat(+num)); // 正常情况. num是数字:  2[a] => aa
      } else if (num === "[") {
        stack.push("["); // 异常情况. num是左括号'[': [[a] => [a
        stack.push(str);
      } else if (num) {
        stack.push(`${num}${str}`); // 异常情况. num是字母: a[b] => ab
      } else {
        stack.push(str); // 异常情况. num是undefined: '[b]' => 'b'
      }
    } else if (t === LB) {
      stack.push("[");
    } else {
      tmp += ch;
    }
    prevType = t;
  });
  return `${stack.join("")}${tmp}`;
}

/**
 * 答案二: 精简模式，用reduce实现
 * 字符串转换: 2[a]=>aa
 * @param {string} str 待处理的字符串
 */

function convertString2(str) {
  const TYPES = { NU: 1, CH: 2, LB: 3, RB: 4, "[": 3, "]": 4 };
  const { NU, CH, LB, RB } = TYPES;
  const type = (str) => TYPES[str[0]] || (isNaN(str[0]) ? CH : NU);
  return str
    .split("")
    .reduce(
      ({ stack, tmp, prevType }, ch, index) => {
        const t = type(ch);
        if (tmp && t !== prevType) {
          stack.push(tmp);
          tmp = "";
        }
        if (t === RB) {
          let str = "";
          let lb;
          while ((lb = stack.pop()) !== "[") str = `${lb}${str}`;
          stack.push(str.repeat(+stack.pop()));
        } else if (t === LB) {
          stack.push("[");
        } else {
          tmp += ch;
        }
        if (index === str.length - 1) stack.push(tmp);
        return { stack, tmp, prevType: t };
      },
      { stack: [], tmp: "", prevType: null }
    )
    .stack.join("");
}
