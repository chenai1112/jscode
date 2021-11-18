const strFormart = (str) => {
  const len = str.length;
  // 左侧括号index
  const leftArrIndex = [];
  // 当前字符
  let curStrChart = "";
  // 结果数组
  const resuletArr = [];
  // 左括号下标
  let startIndex = "";
  for (let i = 0; i <= len; i++) {
    curStrChart = str.charAt(i);
    if (curStrChart === "(") {
      leftArrIndex.push(i);
    } else if (curStrChart === ")") {
      startIndex = leftArrIndex.pop();
      resuletArr.push(str.slice(startIndex + 1, i));
    }
  }
  console.log("--resuletArr--", resuletArr);
};

strFormart("(a+b)+((b-e)*f)+c");
