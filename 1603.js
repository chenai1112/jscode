// function move(arr){
//   // arr.sort();
//   let leng = arr.length;
//   if(leng < 2){
//     return arr;
//   }
//   let i = 0;
//   let j = 0;
//   for(i;i < leng; i ++){
//     if(arr[i] < 0){
//        if(i !== j){
//         [arr[i], arr[j]] = [arr[j], arr[i]]
//         j++
//        }
//     }
//     // j++;
//   }
//   return arr;
// }

function move(arr){
  // arr.sort();
  let leng = arr.length-1;
  if(leng < 2){
    return arr;
  }
  let i = leng;
  let j = leng;
  for(i;i >= 0; i --){
    if(arr[i] < 0){
       if(i !== j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
        j--
       }
    }
    // j++;
  }
  return arr;
}

// driver code
 
let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
console.log(move(arr));