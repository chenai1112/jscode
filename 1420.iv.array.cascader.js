const data = [
  {
    parent: 3,
    id: 4,
    value: 4,
  },
  {
    parent: null,
    id: 1,
    value: 1,
  },
  {
    parent: 1,
    id: 2,
    value: 2,
  },
  {
    parent: 1,
    id: 3,
    value: 3,
  },
];

function cascader(arr) {
  if (!arr) return;
  let newArr = [...arr];
  let res = [];
  let targerNode;
  newArr.map((item, index, arr) => {
    const { parent, id } = item;
    // console.log("--item--parent, id--", parent, id);
    if (parent === null) {
      delete item.parent;
    } else if (parent !== null) {
      // let curitem = arr.splice(index, 1);
      targerNode = arr.find((item) => {
        console.log("--item--find--", item, id, item.parent === id);
        item.parent === id;
        // return item;
      });

      // if (!targerNode.children) {
      //   targerNode.children = [];
      // }
      // targerNode.children.push(item);
      // console.log("000000", "parent, arr", "-----", targerNode);
      // delete parent;
    }
  });
  // console.log("--newArr--", newArr);
}

// cascader(data);

// [
//   {
//     id: 1,
//     value: 1,
//     children: [
//       {
//         id: 2,
//         value: 2,
//       },
//       {
//         id: 3,
//         value:3,
//         children: [
//           {
//             id: 4,
//             value: 4,
//           }
//         ]
//       }
//     ]
//   }
// ];

// ---------------------------------------------------------

// var oriArray = [
//   {
//     id: 6,
//     text: "网路技术",
//     parent: 5,
//   },
//   {
//     id: 2,
//     text: "研发计划",
//     parent: 1,
//   },
//   {
//     id: 3,
//     text: "产品方案",
//     parent: 1,
//   },
//   {
//     id: 5,
//     text: "技术方案",
//     parent: 2,
//   },
//   {
//     id: 4,
//     text: "第二主体",
//   },
//   {
//     id: 1,
//     text: "中心主题",
//     children: [
//       {
//         id: 8,
//         text: "111",
//         parent: 1,
//       },
//     ],
//   },
//   {
//     id: 7,
//     text: "77777",
//     parent: 5,
//   },
// ];

// function getNewArr(metaArray) {
//   var newArr = [];

//   metaArray.forEach((item, i) => {
//     if (!item.hasOwnProperty("parent")) {
//       newArr.push(item);
//     } else {
//       getChildren();
//     }
//   });

//   function getChildren(arr = newArr) {
//     metaArray.forEach((item, i) => {
//       arr.forEach((item1) => {
//         if (item.parent == item1.id) {
//           if (item1.hasOwnProperty("children")) {
//             var flag = item1.children.every((childrenItem) => {
//               return childrenItem.id != item.id;
//             });

//             if (flag) {
//               item1["children"].push(item);
//             } else {
//               return;
//             }
//           } else {
//             item1["children"] = [];

//             item1["children"].push(item);
//           }

//           getChildren(item1.children);
//         }
//       });
//     });
//   }

//   return newArr;
// }

// console.log(JSON.stringify(getNewArr(oriArray)));

// ---------------------------------------------------------
// var source = [
//   {
//     id: 1,
//     pid: 0,
//     name: "body",
//   },
//   {
//     id: 2,
//     pid: 1,
//     name: "title",
//   },
//   {
//     id: 3,
//     pid: 1,
//     name: "div",
//   },
//   {
//     id: 4,
//     pid: 3,
//     name: "span",
//   },
//   {
//     id: 5,
//     pid: 3,
//     name: "icon",
//   },
//   {
//     id: 6,
//     pid: 4,
//     name: "subspan",
//   },
// ];

// function toTree(data) {
//   let result = [];
//   if (!Array.isArray(data)) {
//     return result;
//   }
//   data.forEach((item) => {
//     delete item.children;
//   });
//   // console.log("toTree--forEach--data--", data);
//   let map = {};
//   data.forEach((item) => {
//     map[item.id] = item;
//   });
//   console.log("toTree--forEach--map--", map);
//   data.forEach((item) => {
//     let parent = map[item.pid];
//     if (parent) {
//       (parent.children || (parent.children = [])).push(item);
//     } else {
//       result.push(item);
//     }
//   });
//   return result;
// }
// console.log(toTree(source));

var arr = [
  { id: 1, pid: "-1" },
  { id: 11, pid: "1" },
  { id: 12, pid: "1" },
];

function listToTree(list) {
  var map = {},
    node,
    tree = [],
    i;
  for (i = 0; i < list.length; i++) {
    map[list[i].id] = list[i];
    list[i].children = [];
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.pid !== "-1") {
      map[node.pid].children.push(node);
    } else {
      tree.push(node);
    }
  }
  return tree;
}

listToTree(arr);
//[{"id":1,"pid":"-1","children":[{"id":11,"pid":"1","children":[]},{"id":12,"pid":"1","children":[]}]}]
