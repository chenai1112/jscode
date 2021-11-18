// function throttle(func, time = 300) {
//   let timer;
//   return function (args) {
//     if (!timer) {
//       timer = setTimeout(() => {
//         func.apply(this, args);
//         timer = null;
//       }, time);
//     }
//   };
// }

function throttle(func, time) {
  let pre = 0;
  return function (...args) {
    if (Date.now() - pre > time) {
      pre = Date.now();
      func.apply(this, args);
    }
  };
}
function test(params) {
  console.log("--test--");
}

let tt = throttle(test, 10);
setTimeout(tt, 100);
setTimeout(tt, 200);
setTimeout(tt, 300);
setTimeout(tt, 400);

// tt();
// tt();
// tt();
// tt();
