// Array.prototype.shuffle = function () {
//   var input = this;
//   for (var i = input.length - 1; i >= 0; i--) {
//     var randomIndex = Math.floor(Math.random() * (i + 1));
//     var itemAtIndex = input[randomIndex];
//     input[randomIndex] = input[i];
//     input[i] = itemAtIndex;
//   }
//   return input;
// };

function Shuffle(arr) {
  if (!arr) return null;
  const arrCur = [...arr];
  let leng = arrCur.length;
  for (let i = leng - 1; i >= 0; i--) {
    let index = Math.floor(Math.random() * i);
    [arrCur[i], arrCur[index]] = [arrCur[index], arrCur[i]];
  }
  console.log(arrCur);
  return arrCur;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Shuffle(arr);
