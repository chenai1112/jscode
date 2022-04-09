let arr = [];
let nextArr = [1];
function foo() {
  const originLength = arr.length;
  const nextLength = nextArr.length;
  arr = [...nextArr];
  for (let i = 0; i < nextLength - originLength; i++) {
    const two = nextArr[originLength + i] * 2 + 1;
    const three = nextArr[originLength + i] * 3 + 1;
    nextArr.push(two);
    nextArr.push(three);
    nextArr = [...new Set(nextArr)];
  }
  if (nextArr.length <= 100) {
    foo();
  }
}
foo();
const result = nextArr.sort((a, b) => a - b);

console.log("result--", result);
console.log("--result[100]---", result[100]);
