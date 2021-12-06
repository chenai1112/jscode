/**
Team                           | MP |  W |  D |  L |  P
Devastating Donkeys            |  3 |  2 |  1 |  0 |  7
Allegoric Alaskans             |  3 |  2 |  0 |  1 |  6
Blithering Badgers             |  3 |  1 |  0 |  2 |  3
Courageous Californians        |  3 |  0 |  1 |  2 |  1
 */
/**
 * 1
 */
function Tally(matchRecords) {
  var map = {};
  for (var i = 0; i < matchRecords.length; i++) {
    var record = matchRecords[i];
    if (record) {
      var [A, B, result] = record.split(";");
      // 如果没有存入，就要初始化一次
      if (!map[A]) {
        map[A] = {
          teamName: A,
          MP: 0,
          W: 0,
          L: 0,
          D: 0,
          P: 0,
        };
      }

      if (!map[B]) {
        map[B] = {
          teamName: B,
          MP: 0,
          W: 0,
          L: 0,
          D: 0,
          P: 0,
        };
      }

      map[A].MP++;
      map[B].MP++;

      if (result === "win") {
        map[A].W++;
        map[A].P += 3;
        map[B].L++;
      }

      if (result === "loss") {
        map[B].W++;
        map[B].P += 3;
        map[A].L++;
      }

      if (result === "draw") {
        map[A].D++;
        map[B].D++;
        map[A].P += 1;
        map[B].P += 1;
      }
    }
  }

  var tempArray = [];
  for (item in map) {
    tempArray.push(map[item]);
  }

  tempArray.sort((a, b) => {
    return b.P - a.P;
  });

  function render(tempArray) {
    var model = "\nTeam                           | MP | W | D | L | P\n";
    var namePadding = 30;
    for (var i = 0; i < tempArray.length; i++) {
      var record = tempArray[i];
      var { teamName, MP, W, D, L, P } = record;
      var name = teamName.padEnd(namePadding, " ");
      model += `${name} | ${MP}  | ${W} | ${D} | ${L} | ${P}\n`;
    }
    console.log(model);
    return model;
  }
  //   console.log(tempArray);
  return render(tempArray);
}

Tally([
  "Allegoric Alaskans;Blithering Badgers;win",
  "Devastating Donkeys;Courageous Californians;draw",
  "Devastating Donkeys;Allegoric Alaskans;win",
  "Courageous Californians;Blithering Badgers;loss",
  "Blithering Badgers;Devastating Donkeys;loss",
  "Allegoric Alaskans;Courageous Californians;win",
]);

/**
 *
 * 2
 */

// let arr = [
//   "Allegoric Alaskans;Blithering Badgers;win",
//   "Devastating Donkeys;Courageous Californians;draw",
//   "Devastating Donkeys;Allegoric Alaskans;win",
//   "Courageous Californians;Blithering Badgers;loss",
//   "Blithering Badgers;Devastating Donkeys;loss",
//   "Allegoric Alaskans;Courageous Californians;win",
// ];

// function fn(arr) {
//   let obj = {};
//   arr.map((arrItem) => {
//     let splitArr = arrItem.split(";");
//     splitArr.map((item, index) => {
//       if (index != 2) {
//         if (obj[item]) {
//           obj[item].MP += 1;
//         } else {
//           obj[item] = {
//             MP: 1,
//             W: 0,
//             D: 0,
//             L: 0,
//             P: 0,
//           };
//         }
//       }
//     });

//     switch (splitArr[2]) {
//       case "win":
//         obj = winCount(splitArr[0], obj);
//         obj = lossCount(splitArr[1], obj);
//         break;

//       case "draw":
//         obj = drawCount([splitArr[0], splitArr[1]], obj);
//         break;
//       case "loss":
//         obj = winCount(splitArr[1], obj);
//         obj = lossCount(splitArr[0], obj);
//         break;

//       default:
//         break;
//     }
//   });
//   objToArrAndLog(obj);
// }

// function winCount(win, iobj) {
//   let obj = { ...iobj };
//   obj[win].W += 1;
//   obj[win].P += 3;
//   return obj;
// }

// function lossCount(loss, iobj) {
//   let obj = { ...iobj };
//   obj[loss].L += 1;
//   return obj;
// }

// function drawCount(arr, iobj) {
//   let obj = { ...iobj };
//   arr.map((item) => {
//     obj[item].D += 1;
//     obj[item].P += 1;
//   });
//   return obj;
// }

// function objToArrAndLog(obj) {
//   let arr = [];
//   Object.keys(obj).map((item) => {
//     let indexArr = [];
//     indexArr.push(item);
//     indexArr.push(...Object.values(obj[item]));
//     arr.push(indexArr);
//   });
//   arr = arr.sort(pSort);
//   logRes(arr);
// }

// function pSort(x, y) {
//   if (x[5] === y[5]) {
//     return wordSort(x[1], y[1]);
//   } else {
//     return y[5] - x[5];
//   }
// }

// function wordSort(x, y) {
//   let x1 = x.toUpperCase();
//   let y1 = y.toUpperCase();
//   if (x1 < y1) {
//     return -1;
//   }
//   if (x1 > y2) {
//     return 1;
//   }
//   return 0;
// }

// function logRes(arr) {
//   let newArr = [];
//   console.log("Team                      | MP | W | D | L | P");
//   arr.map((item) => {
//     let indexArr = [];
//     item.map((item1, index) => {
//       if (index === 0) {
//         indexArr.push(item1.padEnd(26));
//       } else if (index === 1) {
//         let newItem1 = item1;
//         newItem1 = String(newItem1).padStart(2);
//         newItem1 = String(newItem1).padEnd(4);
//         indexArr.push(newItem1);
//       } else {
//         let newItem1 = item1;
//         newItem1 = String(newItem1).padStart(2);
//         newItem1 = String(newItem1).padEnd(3);
//         indexArr.push(newItem1);
//       }
//     });
//     newArr.push(indexArr);
//   });
//   newArr.map((item) => {
//     let str = JSON.stringify(item).replace(/\[|\]|"|"/g, "");
//     str = str.replace(/,/g, "|");
//     console.log(str);
//   });
// }

// fn(arr);

/**
 * 3
 */

//  type CompletionResult = {
//   mp:number;
//   w:number;
//   d:number;
//   l:number;
//   p:number;
// }
// // 第一题分割字符串后直接用HashMap分组
// const s1 = (str:string)=>{
//   const ret = Array.from(str.split("\n").map(v=>v.split(";")).reduce((map,[a,b,r])=>{
//     if(!map.has(a)) map.set(a,{mp:0,w:0,d:0,l:0,p:0})
//     if(!map.has(b)) map.set(b,{mp:0,w:0,d:0,l:0,p:0})
//     const oldA = map.get(a)!
//     const oldB = map.get(b)!
//     oldA.mp++
//     oldB.mp++
//     if(r=='draw') {
//       oldA.d++
//       oldB.d++
//       oldA.p++
//       oldB.p++
//     }else if(r=='win'){
//       oldA.w++
//       oldB.l++
//       oldA.p+=3
//     }else{
//       oldA.l++
//       oldB.w++
//       oldB.p+=3
//     }
//     return map
//   },new Map<string,CompletionResult>()))
//   .sort((a,b)=>b[1].p-a[1].p)
//   .map(([name,{mp,w,d,l,p}])=>{
//     return `${name.padEnd(32)}|  ${mp} |  ${w} |  ${d} |  ${l} |  ${p}`
//   }).join("\n")
//   return `${"Team".padEnd(32)}| MP |  W |  D |  L |  P\n` + ret
// }

// console.log("第一题:\n"+s1(`Allegoric Alaskans;Blithering Badgers;win
// Devastating Donkeys;Courageous Californians;draw
// Devastating Donkeys;Allegoric Alaskans;win
// Courageous Californians;Blithering Badgers;loss
// Blithering Badgers;Devastating Donkeys;loss
// Allegoric Alaskans;Courageous Californians;win`))
