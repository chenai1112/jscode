/**
 * 根据输入的数组中每项的 before/after/first/last 规则，输出一个新排好序的数组或者链表。要求，多解的情况可以只求一解，如果无解要求程序能检测出来。注意输入数组是无序的，before 和 after 规则不需要紧邻着指定的元素，只要满足是 before/after 即可。

示例 Input:
 */
let arr = [
  { id: 1 },
  { id: 2, before: 1 }, // 这里 before 的意思是自己要排在 id 为 1 的元素前面
  { id: 3, after: 1 }, // 这里 after 的意思是自己要排在 id 为 1 元素后面
  { id: 5, first: true },
  { id: 6, last: true },
  { id: 7, after: 8 }, // 这里 after 的意思是自己要排在 id 为 8 元素后面
  { id: 8 },
  { id: 9 },
];

// let arr = [
//   { id: 1 },
//   { id: 2, before: 1 }, // 这里 before 的意思是自己要排在 id 为 1 的元素前面
//   { id: 3, after: 1 }, // 这里 after 的意思是自己要排在 id 为 1 元素后面
//   { id: 4 },
//   { id: 5, first: true },
//   { id: 6, last: true },
//   { id: 7, after: 8 }, // 这里 after 的意思是自己要排在 id 为 8 元素后面
//   { id: 8 },
//   { id: 9 },
//   { id: 10 },
//   { id: 11 },
// ];

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function array2list(ary) {
//   if(ary.length === 0) {
//       return null
//   }
//   var nodes = []

//   for(var i = 0; i < ary.length; i++) {
//       var node = {}
//       node.value = ary[i]
//       node.next = null
//       nodes.push(node)
//   }

//   for(var i = 0; i < nodes.length - 1; i++) {
//       nodes[i].next = nodes[i + 1]
//   }
//   console.log(nodes[0], JSON.stringify(nodes[0]));
//   return nodes[0]
// }

function arrayToList(arr) {
  if (!arr.length) {
    return null;
  }

  let head = { next: null };
  //preNode 上一个节点
  let preNode = head;
  let node = null;
  let fristNode = null;
  let lastNode = null;
  let beforeNodes = [];
  let afterNodes = [];

  // function insertList(item) {}

  arr.map((item, index, arr) => {
    node = { id: item.id, next: null };
    if (item.first) {
      fristNode = node;
      // delete item.first;
      // continue;
    } else if (item.last) {
      lastNode = node;
      // delete item.last;
      // continue;
    } else if (item.before) {
      beforeNodes.push(item);
    } else if (item.after) {
      afterNodes.push(item);

      // let prePreNode = findItem({
      //   head,
      //   node,
      //   id: item.id,
      //   target: item.after,
      // });
      // node.next = prePreNode.next.next;
      // preNode.next = node;
      // preNode = node;
    } else {
      preNode.next = node;
      preNode = node;
    }
  });

  inserBefore({
    head,
    beforeNodes,
  });

  inserAfter({
    head,
    afterNodes,
  });

  // 头节点
  if (fristNode) {
    fristNode.next = head.next;
    head.next = fristNode;
    fristNode = null;
  }
  // 尾节点
  if (lastNode) {
    preNode.next = lastNode;
    lastNode = null;
  }

  console.log(JSON.stringify(head));
  return head;
}

function findItem(param) {
  const { head, id, target } = param;
  // console.log("--findItem--", head);
  // 前一个节点
  let preNode;
  // 当前节点
  let node;
  if (head != null) {
    preNode = head;
    while (preNode.next) {
      node = preNode.next;
      if (node.id !== target) {
        preNode = node;
        node = node.next;
      } else if (node.id === target) {
        // console.log("--preNode--node--", preNode, node);
        break;
      }
    }
    // console.log("--node--", node);
    if (node) {
      return preNode;
    } else {
      return null;
    }
  }
}

function inserBefore(param) {
  const { head, beforeNodes } = param;
  let item;
  let preNode;
  while (beforeNodes.length) {
    item = beforeNodes[0];
    const node = { id: item.id, next: null };
    preNode = findItem({ head, id: item.id, target: item.before });
    // preNode = findItem({ head, id: item.id, target: item.before });
    // console.log("--inserBefore--preNode--", preNode);
    if (preNode) {
      node.next = preNode.next;
      preNode.next = node;
      beforeNodes.shift();
    } else {
      break;
    }
  }
}

function inserAfter(param) {
  const { head, afterNodes } = param;
  let item;
  let preNode = {};
  while (afterNodes.length) {
    item = afterNodes[0];
    const node = { id: item.id, next: null };
    // preNode = findItem({ head, id: item.id, target: item.after });
    prePreNode = findItem({ head, id: item.id, target: item.after });
    if (prePreNode) {
      preNode = prePreNode.next;
      node.next = preNode.next;
      preNode.next = node;
      preNode = node;
      afterNodes.shift();
    } else {
      break;
    }
  }
}

arrayToList(arr);
// array2list(arr);

/**
 * 2
 */

// type Q2Item = {
//   id:number
//   before?:number
//   after?:number
//   first?:boolean
//   last?:boolean
// }
// // 第二题运用到拓扑排序+并查集分组
// const s2 = (arr:Q2Item[])=>{
//   const map = new Map(arr.map(({id})=>[id,{id,afters:[] as number[]}]))
//   let firstId:null|number = null
//   let lastId:null|number = null
//   const uSet = new Map<number,number>()
//   for(let {id,before,after,first,last} of arr){
//     uSet.set(id,id)
//     const node = map.get(id)!
//     if(before!=null) {
//       if(!map.has(before)) throw new Error(`node ${before} is not exist`)
//       const pre = map.get(before)!
//       pre.afters.push(id)
//     }
//     if(after!=null) node.afters.push(after)
//     if(first==true && last==true){
//       if(arr.length>1)  throw new Error('error')
//       return [id]
//     }
//     if(first==true){
//       if(firstId!=null)  throw new Error(`node ${id} is the first one!`)
//       firstId = id
//     }
//     if(last==true){
//       if(lastId!=null) throw new Error(`node ${id} is the last one!`)
//       lastId = id
//     }
//   }
//   const visited = new Map<number,boolean|null>()
//   const ret:number[] = []

//   const getParent = (id:number):number=>
//     uSet.get(id)==id? id:getParent(uSet.get(id)!)
//   const merge = (a:number,b:number)=>{
//       uSet.set(uSet.get(a)!,uSet.get(b)!)
//   }
//   const dfs = (id:number)=>{
//     const node = map.get(id)!
//     if(visited.get(id)==true) return;
//     if(visited.get(id)==false) throw new Error('cycle dependecies')
//     visited.set(id,false)
//     for(let i of node.afters){
//         merge(id,i)
//         if(visited.get(i)==false) throw new Error('cycle dependecies')
//         if(!visited.has(i)) dfs(i)
//     }
//     visited.set(id,true)
//     ret.push(id)
//   }

//   for(let {id} of arr)  dfs(id)
//   const result = new Map<number,number[]>()
//   for(let id of ret){
//       const k = getParent(id)
//       if(!result.has(k)) result.set(k,[])
//       const lst = result.get(k)!
//       lst.push(id)
//   }
//   let firstNode:number[]|null = null
//   let lastNode:number[]|null = null
//   if(firstId!=null){
//       const f = getParent(firstId)
//       firstNode = result.get(f)!
//       result.delete(f)
//       if(firstNode[0]!==firstId)
//         throw new Error(`node ${firstId} must be the first one1`)
//   }
//   if(lastId!=null){
//       const f = getParent(lastId)
//       lastNode = result.get(f)!
//       result.delete(f)
//       if(lastNode[lastNode.length-1]!==lastId)
//         throw new Error(`node ${lastId} must be the last one1!`)
//   }
//   const returnArr = Array.from(result).map(v=>v[1]).flat()
//   if(firstNode!=null) returnArr.unshift(...firstNode)
//   if(lastNode!=null) returnArr.push(...lastNode)
//   return returnArr
// }

// console.log("第二题:\n"+s2([
//     {id: 1},
//     {id: 7, after: 8}, // 这里 after 的意思是自己要排在 id 为 8 元素后面
//     {id: 2, before: 1}, // 这里 before 的意思是自己要排在 id 为 1 的元素前面
//     {id: 3, after: 1},  // 这里 after 的意思是自己要排在 id 为 1 元素后面
//     {id: 5, first: true},
//     {id: 6, last: true},
//     {id: 8},
//     {id: 9},
// ]).join("->"))
