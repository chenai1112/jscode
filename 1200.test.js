// let arr = [1, 2, 4, 4, 3, 5],
//   k = 2,
//   m = 4;
// function findTopSum(arr, k, m) {
//   const uniqueArr = [];
//   const occurrence = {};
//   arr.forEach((item) => {
//     occurrence[item] = occurrence[item] || 0;
//     if (!occurrence[item]) uniqueArr.push(item);
//     occurrence[item]++;
//   });
//   uniqueArr.sort();
//   console.log(
//     uniqueArr,
//     occurrence,
//     (uniqueArr[k - 1] || 0) * (occurrence[uniqueArr[k - 1]] || 0),
//     (uniqueArr[m - 1] || 0) * (occurrence[uniqueArr[m - 1]] || 0)
//   );
//   return (
//     (uniqueArr[k - 1] || 0) * (occurrence[uniqueArr[k - 1]] || 0) +
//     (uniqueArr[m - 1] || 0) * (occurrence[uniqueArr[m - 1]] || 0)
//   );
// }
// findTopSum(arr, k, m);

// const map = { 东: 0, 西: 1, 南: 2, 北: 3 };
// const arr = [
//   "华北1",
//   "华南2",
//   // "华西1",
//   // "华南1",
//   // "华西2",
//   // "华东1",
//   // "华东2",
//   // "华东4",
// ];
// arr.sort((a, b) => {
//   const directionA = map[a.slice(1, 2)];
//   const directionB = map[b.slice(1, 2)];
//   const numA = +a.slice(2);
//   const numB = +b.slice(2);
//   console.log("--directionA--", directionA, directionB, numA, numB);
//   return directionA === directionB ? numA - numB : directionA - directionB;
// });
// console.log(arr);

// function add(a, b) {
//   a = a.split("");
//   b = b.split("");
//   var carry = 0,
//     result = "";
//   while (a.length || b.length || carry) {
//     var temp = parseInt(a.pop() || 0) + parseInt(b.pop() || 0) + carry;
//     result = (temp % 10) + result;
//     carry = Math.floor(temp / 10);
//   }
//   return result;
// }

/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *      编码规则是`count[content]`，将content的内容count次输出，
        count是>=0的整数，content是由字母组成
 * 示例：
 * const s = '3[x]2[y]'; convertString(str); // 返回'xxxyy'
 * const s = '3[x2[y]]'; convertString(str); // 返回'xyyxyyxyy'
 */
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  if (s.length === 0) return "";
  let res = "";
  // 用于记录当前的数字
  let times = 0;
  // 记录出现过的数字
  let numStack = [];
  // 记录出现过的字符
  let strStack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char >= "0" && char <= "9") {
      // 如果出现两位及以上数字字符，将其转化为正确的数字
      times = times * 10 + Number(char);
    } else if (char === "[") {
      // 遇到[字符时，将当前的数字和字符进行保存，分别存进对应的栈内
      // 然后重新计算出现的数字和字符
      numStack.push(times);
      strStack.push(res);
      times = 0;
      res = "";
    } else if (char === "]") {
      // 出现]字符时，计算满足[]条件的字符串
      // 首先取出numStack中保存的字符的出现次数
      // 然后按照出现次数对res进行累加
      let tmpTimes = numStack.pop();
      let tmpStr = res;
      for (let k = 1; k < tmpTimes; k++) {
        res += tmpStr;
      }
      // 最后取出上一层[]内的字符加到res前面
      res = strStack.pop() + res;
    } else {
      // 如果遇到的是字母字符，则更新当前的字符串
      res += char;
      console.log("-----", res, strStack);
    }
    console.log("--00--", res, strStack);
  }
  console.log("--11--", res, strStack);

  return res;
};

// const s1 = "3[x]2[y]";
// let res1 = decodeString(s1); // 返回'xxxyy'
// const s2 = "3[x2[y]]";
// let res2 = decodeString(s2); // 返回'xyyxyyxyy'
const s3 = "yyds3[u]2[w]";
let res3 = decodeString(s3);
// console.log(res1, res2, res3);
console.log(res3);
