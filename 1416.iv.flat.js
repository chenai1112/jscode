// function flat(arr) {
//   if (!arr) return;
//   let leng = arr.length;
//   let res = [];
//   for (let i = 0; i < leng; i++) {
//     let item = arr[i];
//     if (Array.isArray(item)) {
//       res = res.concat(flat(item));
//     } else {
//       res.push(item);
//     }
//   }
//   return res;
// }

// function flat(arr) {
//   if (!arr) return;
//   return arr.reduce((res, item) => {
//     return Array.isArray(item) ? res.concat(flat(item)) : res.concat(item);
//   }, []);
// }

// function flat(array) {
//   return array.reduce(
//     (target, current) =>
//       Array.isArray(current)
//         ? target.concat(flat(current))
//         : target.concat(current),
//     []
//   );
// }

function flat(array) {
  while (array.some((item) => Array.isArray(item))) {
    console.log(item, ...array);
    array = [].concat(...array);
  }
  return array;
}

// function flattenByDeep(array, deep = 1) {
//   return array.reduce(
//     (target, current) =>
//       Array.isArray(current) && deep > 1
//         ? target.concat(flattenByDeep(current, deep - 1))
//         : target.concat(current),
//     []
//   );
// }

var arr1 = [1, [2], [3, [4]], 5];
var res1 = flat(arr1);
// var res2 = flattenByDeep(arr1);
console.log(res1);
