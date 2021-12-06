/**
 * 1
 *
 */
let arr = [
  [1, 2],
  // [5, 3],
  [3, 1],
  [1, 2],
  // [1, 2],
  // [5, 3],
  // [3, 1],
  // [1, 2],
  // [2, 4],
  // [1, 6],
  // [2, 3],
  // [3, 4],
  // [5, 6],
];

function setChain(arr) {
  if (!arr) return;
  if (arr.length < 2) {
    return arr;
  }
  let arrTemp = [...arr];
  let resArray = [];

  resArray.push(arrTemp[0]);
  arrTemp.shift();

  function jionNext(param) {
    const { newArr, num } = param;
    console.log("newArr", newArr);
    let leng = newArr.length;
    if (newArr.length < 1) {
      return newArr;
    }
    let item;
    let curNum;
    let curArr;
    let resArr = [];

    for (let i = 0; i < leng; i++) {
      item = newArr[i];
      if (item[0] === num) {
        resArr = resArr.concat(item);
        curNum = item[1];
        curArr = newArr.splice(i + 1);
        i = leng - 1;
      } else if (item[1] === num) {
        resArr = resArr.concat([item[1], item[0]]);
        curNum = item[0];
        curArr = newArr.splice(i + 1);
        i = leng - 1;
      }
    }
    console.log("--resArr--", resArr);

    return [resArr].concat(jionNext({ newArr: curArr, num: curNum }));
  }

  let joinArr = jionNext({ newArr: arrTemp, num: resArray[0][1] });
  resArray = resArray.concat(joinArr);
  // console.log("---", joinArr.toString().slice(-1), arr.toString().slice(0, 1));
  console.log(
    "--resArray.length !== arr.length--",
    resArray,
    resArray.length,
    arr.length
  );
  if (
    resArray.length !== arr.length ||
    joinArr.toString().slice(-1) !== arr.toString().slice(0, 1)
  ) {
    return "不能形成环状排列！";
  }
  return resArray;
}

let result = setChain(arr);

console.log("-----result-----排列如下：", result);

// console.log("--result--", result);
