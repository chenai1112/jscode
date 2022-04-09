/**
 * 大整数减法，不考虑小数和负数
 */
function minus(a, b) {
  a = a.split("");
  b = b.split("");
  var aMaxb = a.length > b.length; // 标记A是否大于B
  if (a.length == b.length) {
    for (var i = 0, len = a.length; i < len; i++) {
      if (a[i] == b[i]) continue;
      aMaxb = a[i] > b[i];
      break;
    }
  }
  if (!aMaxb) a = [b, (b = a)][0]; // 只要A不比B大都交换
  var result = "";
  while (a.length) {
    var temp = parseInt(a.pop()) - parseInt(b.pop() || 0);
    if (temp >= 0) result = temp + result;
    else {
      result = temp + 10 + result;
      a[a.length - 1]--; // 由于已经保证了a一定大于等于b，所以不存在a[i-1]为undefined的情况
    }
  }
  return (aMaxb ? "" : "-") + result.replace(/^0*/g, ""); // 去掉前面可能的无效0
}

// minus("1672", "99"); // "1573"
// minus("1672", "6329"); // "-4657"
// minus("1672", "1131"); // "541"
// minus("1672", "66429"); // "-64757"

/**
 * 大整数减法，不考虑小数和负数
 */
function add(a, b) {
  let leng = Math.max(a.length, b.length);
  a = a.padStart(leng, 0); //"0009007199254740991"
  b = b.padStart(leng, 0);
  let carry = 0;
  let curNum = 0;
  // let countNumArr = [];
  let res = "";
  console.log("--leng--", leng);
  for (i = leng - 1; i >= 0; i--) {
    // curNum = parseInt() a[i] - 0 + (b[i] - 0) + carry;
    curNum = parseInt(a[i]) + parseInt(b[i]) + carry;

    carry = 0;
    if (curNum > 10) {
      curNum = Math.floor(curNum % 10);
      carry = 1;
    }
    // countNumArr.unshift(curNum);
    res = curNum + res;
  }
  if (carry) {
    // countNumArr.unshift(carry);
    res = carry + res;
  }
  // return countNumArr.join("");
  return res;
}

let a = "9007199254740991";
let b = "1234567899999999999";
// let a = "12";
// let b = "3";
let c = add(a, b);
console.log(c);

function addBig(num1, num2) {
  let maxlen = Math.max(num1.length, num2.length);
  let a = num1.padStart(maxlen, 0);
  let b = num2.padStart(maxlen, 0);
  let res = "";
  let next = 0; //用一个变量存每一次的进位
  for (let i = maxlen - 1; i >= 0; i--) {
    let acc = Number(a[i]) + Number(b[i]) + next;
    next = Math.floor(acc / 10);
    res = (acc % 10) + res;
  }
  if (next === 1) res = "1" + res; //如果到最高位还有进位就再加一位
  return res;
}

function addSamll(num1, num2) {
  let len1 = (num1 + "").split(".")[1].length;
  let len2 = (num2 + "").split(".")[1].length;
  let maxlen = Math.max(len1, len2);
  let a = Math.pow(10, maxlen);
  return (num1 * a + num2 * a) / a;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
let multiply = function (num1, num2) {
  //判断输入是不是数字
  if (isNaN(num1) || isNaN(num2)) return "";
  let len1 = num1.length,
    len2 = num2.length;
  let ans = [];

  //这里倒过来遍历很妙,不需要处理进位了
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
      let index1 = i + j,
        index2 = i + j + 1;
      let mul = num1[i] * num2[j] + (ans[index2] || 0);
      ans[index1] = Math.floor(mul / 10) + (ans[index1] || 0);
      ans[index2] = mul % 10;
    }
  }

  //去掉前置0
  let result = ans.join("").replace(/^0+/, "");

  //不要转成数字判断，否则可能会超精度！
  return !result ? "0" : result;
};
