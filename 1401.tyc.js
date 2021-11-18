let arr1 = [4, 1, 3, 9, 6, 2];
let arr2 = [8, 5, 3, 2, 1, 4, 7];

let newArr = [...arr1, ...arr2];
console.log("--newArr--", newArr);
let setArr = new Set([...newArr]);
console.log("--setArr--", setArr);
let singleArr = Array.from(setArr);
console.log("--singleArr--", singleArr);
let sortArr = singleArr.sort((a, b) => a - b);
console.log("--sortArr--", sortArr);

let num = 1234567890.123213;
let currency = num.toLocaleString();
console.log("--currency--", currency);
