// function Currying(fn, ...args1) {
//   console.log(
//     "000-----",
//     // args1,
//     // ...args1,
//     fn.length,
//     args1.length,
//     args1.length >= fn.length
//   );

//   if (args1.length >= fn.length) {
//     return fn(...args1);
//   }

//   return function (...args2) {
//     console.log("0-0-0-0-0-0-", args1, args2);
//     return Currying(fn, ...args1, ...args2);
//   };
// }

// function Currying(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args);
//   }

//   return function (...args2) {
//     return Currying(fn, ...args, ...args2);
//   };
// }

// function Currying(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args);
//   } else {
//     return (...args2) => Currying(fn, ...args, ...args2);
//   }
// }

// function add(args) {
//   let count = 0;
//   args.reduce((count, item) => {
//     count += item;
//   });
//   return count;
// }

function Currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args);
  }
  return function (...args2) {
    return Currying(fn, ...args, ...args2);
  };
}

function add(...args) {
  console.log("--args--", args);
  let count = 0;
  return function (args) {
    count += args;
    return count;
  };
  //   a = a || 0;
  //   b = b || 0;
  //   c = c || 0;
  //   d = d || 0;
  //   return a + b + c + d;
}
// function add(x, y) {
//   // const add = (x, y) => {
//   x = x || 0;
//   y = y || 0;
//   return x + y;
// }
console.log(add(2, 3, 4, 5));
// // var curriedAdd = Currying(add, 1, 2, 3, 4, 5);
var curriedAdd = Currying(add);
// console.log("--curriedAdd--", curriedAdd);

// // curriedAdd(1)(3) === 4;
// console.log(curriedAdd(1)(3));
// console.log(curriedAdd(11)(12)(11)(12));
// true

// var increment = curriedAdd(1);

// console.log(increment(2), increment(2) === 3);

// // true

// var addTen = curriedAdd(10);

// console.log(addTen(2), addTen(2) === 12);

// true

// function currying(fn, ...args) {
//   if (args.length >= fn.length) {
//     return fn(...args);
//   } else {
//     return (...args2) => currying(fn, ...args, ...args2);
//   }
// }

// var curryingFun = currying(add);
// console.log(curryingFun(1)(2)(3)); // 1 2 3
// console.log(curryingFun(1, 2)(3)); // 1 2 3
// console.log(curryingFun(1, 2, 3)); // 1 2 3
