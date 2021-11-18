function debounce(func, time = 500, flag = false) {
  let tiemr;
  return function (...args) {
    clearTimeout(tiemr);
    if (flag) {
      func.apply(this, args);
    }
    tiemr = setTimeout(() => {
      func.apply(this, args);
    }, time);
  };
}

// console.log("--debounce--", debounce);
// const cc = () => {
//   console.log("ccc");
// };
function cc(params) {
  console.log("-----ccc---");
}

function dd(params) {
  console.log("-----dd---");
}

let ce = debounce(cc, 50, true);
let cd = debounce(dd, 50);

ce();
ce();
ce();
ce();

cd();
cd();
cd();
cd();
cd();

// cc();
// cc();
// cc();
