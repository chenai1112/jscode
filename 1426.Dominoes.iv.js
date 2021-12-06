/**
 * 1
 *
 */
let arr = [
  [1, 2],
  [1, 2],
  [1, 6],
  //   [2, 3],
  //   [2, 4],
  //   [3, 1],
  //   [3, 4],
  //   [4, 1],
  //   [5, 6],
  //   [5, 1],
  //   [4, 5],
  //   [5, 6],
  //   [6, 1],
];

function setChain(arr) {
  if (!arr) return;
  if (arr.length < 2) {
    return arr;
  }
  let arrTemp = [...arr];

  let resArr = [];
  let countNum = 0;
  let index = 0;

  while (countNum < arr.length) {
    let endNum;
    let nextItem;
    if (resArr.length === 0) {
      index++;
      countNum++;
      resArr.push(arrTemp[index]);
      arrTemp.shift();
    } else {
      console.log("00--index--", index, countNum, resArr);

      endNum = resArr[countNum - 1][0];
      console.log("--resArr--", endNum, resArr, index);
      nextItem = resArr[index - 1];
      console.log("---nextItem---", nextItem);
      if (endNum === nextItem[0]) {
        countNum++;
        resArr.push(arrTemp[index]);
        arrTemp.splice(index, 1);
      } else if (endNum === nextItem[1]) {
        countNum++;
        resArr.push([arrTemp[(index[1], arrTemp[index][0])]]);
        arrTemp.splice(index, 1);
      }
      index++;
      //   if (nextItem.has[endNum]) {
      //     countNum++;
      //     resArr.push(arrTemp[index]);
      //     resArr.splice(index, 1);
      //   }
    }
  }

  console.log("--resArr--", resArr);
  //   for(){

  //   }
  //   function Chain() {}

  //
  //   function whirl() {

  //   }

  //   let sortArr = arrTemp.reduce((acc, item) => {
  //     console.log(`${item[0]}${item[1]}`, "---", item);
  //     return (acc[`${item[0]}${item[1]}`] = item);
  //     // console.log(Array.isArray(item), `${item[0]}${item[1]}`);
  //     // return (acc += `${item[0]}${item[1]}`);
  //   }, {});
  //   console.log(sortArr);
}

setChain(arr);

// function setChain(arr) {
//   let indexObj = {};
//   let sortArr = [];
//   arr.map((item, index) => {
//     if (indexObj[item[0]]) {
//       indexObj[item[0]] = [...indexObj[item[0]], item[1]];
//     } else {
//       indexObj[item[0]] = [item[1]];
//     }
//   });
//   sortArr = groupArr(Object.keys(indexObj).sort(), [], sortArr);
//   if (sortArr) {
//     return getArr(indexObj, sortArr);
//   } else {
//     return false;
//   }
// }

// function getArr(indexObj, sortArr) {
//   let arr = [];
//   sortArr.map((item, index) => {
//     if (arr.length) {
//       if (indexObj[arr[arr.length - 1][1]]) {
//         if (index != sortArr.length - 1) {
//           if (
//             indexObj[item].includes(Number(item) + 1) &&
//             indexObj[Number(item) + 1]
//           ) {
//             arr.push([Number(item), Number(item) + 1]);
//           } else {
//             arr = [];
//           }
//         } else {
//           if (indexObj[Number(item)].includes(arr[0][0])) {
//             arr.push([Number(item), arr[0][0]]);
//           } else {
//             arr = [];
//           }
//         }
//       }
//     } else {
//       if (indexObj[item].includes(Number(item) + 1)) {
//         arr.push([Number(item), Number(item) + 1]);
//       }
//     }
//   });
//   if (arr.length) {
//     console.log(arr);
//     return arr;
//   } else {
//     return false;
//   }
// }

// function groupArr(arr, sarr, sortArr) {
//   let newarr = sarr || [];
//   if (newarr.length) {
//     if (Number(newarr[newarr.length - 1]) + 1 === Number(arr[0])) {
//       newarr.push(arr.shift());
//       if (arr.length === 0) {
//         return newarr;
//       }
//     } else {
//       return false;
//     }
//   } else {
//     newarr.push(arr.shift());
//   }
//   if (arr.length > 0) {
//     groupArr(arr, newarr, sortArr);
//   }
//   return newarr;
// }

// setChain(arr);

/**
 * 2
 */
// var test = [
//   [1, 2],
//   [5, 3],
//   [3, 1],
//   [1, 2],
//   [2, 4],
//   [1, 6],
//   [2, 3],
//   [3, 4],
//   [5, 6],
// ];

// var dominoes = function (chains) {
//   var temp = {};
//   for (var i = 0; i < chains.length; i++) {
//     var chain = chains[i];
//     var [first, last] = chain;

//     if (temp[first]) {
//       temp[first].push(i);
//     } else {
//       temp[first] = [i];
//     }

//     if (temp[last]) {
//       temp[last].push(i);
//     } else {
//       temp[last] = [i];
//     }
//   }
//   // 如果骨牌的个数存在单数，那么肯定不能匹配
//   var tempList = Object.keys(temp);
//   var canContinue = true;
//   for (var i = 0; i < tempList.length; i++) {
//     var chainlist = tempList[i];
//     if (chainlist.length % 2) {
//       canContinue = false;
//       break;
//     }
//   }

//   if (!canContinue) {
//     return [];
//   }

//   function matchGroup(c1, c2) {
//     var [A, B] = c1;
//     var [C, D] = c2;
//     var result = [];
//     if (A === C) {
//       // 可能的头尾
//       result.push({
//         possible: [
//           [
//             [B, A],
//             [C, D],
//           ],
//           [
//             [D, A],
//             [C, B],
//           ],
//         ],
//       });
//       return result;
//     }

//     if (A === D) {
//       // 可能的头尾
//       result.push({
//         possible: [
//           [
//             [B, A],
//             [D, C],
//           ],
//           [
//             [C, A],
//             [D, B],
//           ],
//         ],
//       });
//       return result;
//     }

//     if (B === C) {
//       // 可能的头尾
//       result.push({
//         possible: [
//           [
//             [A, B],
//             [C, D],
//           ],
//           [
//             [D, B],
//             [C, A],
//           ],
//         ],
//       });
//       return result;
//     }

//     if (C === D) {
//       result.push({
//         possible: [
//           [
//             [A, C],
//             [D, B],
//           ],
//           [
//             [B, C],
//             [D, A],
//           ],
//         ],
//       });
//       return result;
//     }
//   }

//   console.log(temp);
// };
// dominoes(test);

/**
 * 3
 */

// 由图构建有环双链表，由于题目保证有效且有环
// 所以从任意一点出发即可，通过DFS遍历到所有节点结束
// const s4 = (arr:[number,number][])=>{
//   const map = new Map<number,number[]>()
//   for(let i=0;i<arr.length;i++){
//     const [l,r] = arr[i]
//     if(!map.has(l)) map.set(l,[])
//     if(!map.has(r)) map.set(r,[])
//     map.get(l)!.push(i)
//     map.get(r)!.push(i)
//   }
//   const dfs = (i:number,path:Set<number>):number[]|null=>{
//     if(path.size==arr.length) return Array.from(path)
//     const lst = map.get(i)
//     if(lst==null) return null
//     for(let k of lst){
//       if(path.has(k)) continue;
//       const next = arr[k][0]==i?arr[k][1]:arr[k][0]
//       const ret = dfs(next,new Set(path).add(k))
//       if(ret!=null) return ret
//     }
//     return null
//   }
//   const ret =  dfs(arr[0][0],new Set([0]))
//   if(ret==null) return null
//   const lst:[number,number][] = [[arr[0][1],arr[0][0]]]
//   for(let i=1;i<ret.length;i++){
//     const [_,preR] = lst[lst.length-1]
//     const [l,r] = arr[ret[i]]
//     lst.push(preR==l?[l,r]:[r,l])
//   }
//   return lst.map(v=>v.join(""))
// }

// console.log("第四题:\n"+
// s4([[1, 2], [5, 3], [3, 1], [1, 2], [2, 4], [1, 6], [2, 3], [3, 4], [5, 6]]))
