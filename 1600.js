// let arr = [];
// let result = [1];
function getArrayIndexValue(num) {
  let arr = [1];
  let index = 0;
  if (num === 0) {
    return arr[num];
  }
  // let twoArray = [];
  // let threeArray = [];
  function setArrayItem(index) {
    let indexItemValue = arr[index];
    let tempArr = [];
    console.log("--indexItemValue--", indexItemValue, index, num);
    if (arr.length <= num) {
      tempArr.push(indexItemValue * 2 + 1);
      tempArr.push(indexItemValue * 3 + 1);
      arr = arr.concat(tempArr);
      arr = [...new Set(arr)].sort((a, b) => a - b);
      console.log("--arr--tempArr--", arr, tempArr);
      index++;
      if (arr.length <= num) {
        setArrayItem(index);
      }
    }
    console.log("---arr---", arr, num);
    arr.sort((a, b) => a - b);
    return arr[num];
  }
  return setArrayItem(index);
  // arr.push()
}

// console.error(getArrayIndexValue(0));
// console.error(getArrayIndexValue(1));
// console.error(getArrayIndexValue(3));
// console.error(getArrayIndexValue(4));

console.error(getArrayIndexValue(100));
