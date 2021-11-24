let arr1 = Array.from(Array(3)).map(() => Array(3).fill(0));

let arr2 = [...Array(3)].map(() => Array(3).fill(0));

let arr3 = new Array(3).fill(0).map((_) => new Array(3).fill(0));

// let arr4 = new Array(3).map((_) => new Array(3).fill(0));
arr3[1][1] = 1;
console.log(arr3);
