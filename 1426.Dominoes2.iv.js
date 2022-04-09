/**
 * 1
 *
 */
let arr = [
  // [1, 1],
  [1, 2],
  [3, 2],
  [5, 3],
  [3, 1],
  [1, 2],
  [1, 2],
  [5, 3],
  [3, 1],
  [1, 2],
  [2, 4],
  [1, 6],
  [2, 3],
  [3, 4],
  [5, 6],
];

function setChain(arr) {
  if (!arr) return;
  if (arr.length < 2) {
    if (arr[0][0] === arr[0][1]) {
      return arr;
    } else {
      return "不能成环！";
    }
    // return arr;
  }
  let maxLength = arr.length;
  let resArray = [];
  resArray.push(arr.shift());

  function doChain(curArr) {
    let resArrayLastIndex = resArray.length - 1;
    let LastItemValue = resArray[resArrayLastIndex][1];
    let tagertItem = [];
    for (let i = 0; i < curArr.length; i++) {
      if (LastItemValue === curArr[i][0]) {
        tagertItem = curArr.splice(i, 1)[0];
        resArray.push(tagertItem);
        doChain(arr);
      } else if (LastItemValue === curArr[i][1]) {
        tagertItem = curArr.splice(i, 1)[0].reverse();
        resArray.push(tagertItem);
        doChain(arr);
      }
    }
  }

  doChain(arr);
  console.log("-----resArray---", resArray);
  if (maxLength > resArray.length) {
    return "不能成环！";
  } else {
    return resArray;
  }
}

let result = setChain(arr);

console.log("-----result-----", result);
