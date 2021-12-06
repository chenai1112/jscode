var arr1 = [
  { id: 4, name: "i4", parentId: 3 },
  { id: 6, name: "i6", parentId: 2 },
  { id: 2, name: "i2", parentId: 1 },
  { id: 1, name: "i1" },
  { id: 3, name: "i3", parentId: 2 },
  { id: 5, name: "i5", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 },
];
var arr2 = [
  ({ id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 }),
];

// var createFlatDataToTree = function (flatData) {
//   var temp = {};
//   var root = null;

//   for (var i = 0; i < flatData.length; i++) {
//     var node = flatData[i];
//     var { id, parentId } = node;
//     if (parentId) {
//       if (temp[parentId]) {
//         temp[parentId].childs.push(id);
//       } else {
//         temp[parentId] = {
//           node: null,
//           childs: [id],
//         };
//       }
//     }

//     if (temp[id]) {
//       temp[id].node = node;
//     } else {
//       temp[id] = {
//         node,
//         childs: [],
//       };
//     }

//     if (!parentId) {
//       root = temp[id];
//     }
//   }

//   function createTree(node) {
//     if (!node.childs.length) {
//       delete node.childs;
//       return node;
//     }

//     var result = [];
//     for (var i = 0; i < node.childs.length; i++) {
//       var childId = node.childs[i];
//       var childNode = temp[childId];

//       result.push(createTree(childNode));
//     }
//     node.children = result;
//     delete node.childs;
//     return node;
//   }
//   root = createTree(root);
//   temp = null;
//   console.log(root);
//   return root;
// };

// createFlatDataToTree(arr1);
// createFlatData2Tree(arr2);

/**
 * 2
 */

// let arr = [
//   { id: 1, name: "i1" },
//   { id: 2, name: "i2", parentId: 1 },
//   { id: 4, name: "i4", parentId: 3 },
//   { id: 3, name: "i3", parentId: 2 },
//   { id: 8, name: "i8", parentId: 7 },
// ];

// function listToTree(list) {
//   var map = {},
//     node,
//     tree = [],
//     i;
//   for (i = 0; i < list.length; i++) {
//     map[list[i].id] = list[i];
//     // list[i].children = [];
//   }
//   for (i = 0; i < list.length; i += 1) {
//     node = list[i];
//     if (node.parentId) {
//       // map[node.parentId].children = map[node.parentId].children || [];
//       if (map[node.parentId]) {
//         map[node.parentId].children = map[node.parentId].children || [];
//         map[node.parentId].children.push(node);
//       } else {
//         console.error(
//           `数组里没有id为：${node.parentId}节点，所以忽略了ID为${node.id}的插入节点`
//         );
//       }
//     } else {
//       tree.push(node);
//     }
//   }
//   console.log(JSON.stringify(tree));
//   return tree;
// }

// listToTree(arr);

// var arr = [{ id: 1 }, { id: 11, pid: "1" }, { id: 12, pid: "1" }];

// function listToTree(list) {
//   var map = {},
//     node,
//     tree = [],
//     i;
//   for (i = 0; i < list.length; i++) {
//     map[list[i].id] = list[i];
//     list[i].children = [];
//   }
//   for (i = 0; i < list.length; i += 1) {
//     node = list[i];
//     if (node.pid) {
//       map[node.pid].children.push(node);
//     } else {
//       tree.push(node);
//     }
//   }
//   console.log(tree);
//   return tree;
// }

// listToTree(arr);
/**
 * 3
 */

// type Q3Item = {
//   id:number
//   name:string
//   parentId?:number
// }
// type TreeNode = {
//   id:number
//   name:string
//   children?:Array<TreeNode>
// }
// // 先建好所有节点，再一次性循环填充children
// const s3 = (arr:Q3Item[])=>{
//   const nodeMap = new Map<number,TreeNode>(arr.map(({id,name})=>[id,{id,name}]))
//   let root:TreeNode|null = null
//   for(let {id,parentId} of arr){
//     const node = nodeMap.get(id)!
//     if(parentId==null){
//       if(!root) root = node
//       else throw new Error('root exists!')
//     }else{
//       const parent = nodeMap.get(parentId)
//       if(!parent) throw new Error('parent is not exist!')
//       if(parent.children==null) parent.children = []
//       parent.children.push(node)
//     }
//   }
//   return root
// }

// console.log("第三题:\n"+JSON.stringify(s3([
//     {id:1, name: 'i1'},
//     {id:2, name:'i2', parentId: 1},
//     {id:4, name:'i4', parentId: 3},
//     {id:3, name:'i3', parentId: 2},
//     {id:8, name:'i8', parentId: 3}
// ]),null,2))
