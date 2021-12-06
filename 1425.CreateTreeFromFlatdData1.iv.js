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

let arr3 = [
  { id: 1, name: "i1" },
  { id: 2, name: "i2", parentId: 1 },
  { id: 4, name: "i4", parentId: 3 },
  { id: 3, name: "i3", parentId: 2 },
  { id: 8, name: "i8", parentId: 7 },
];

function listToTree(list) {
  let dict = {};
  let node;
  // 返回Tree
  let resTree = [];
  for (let i = 0; i < list.length; i++) {
    dict[list[i].id] = list[i];
  }

  for (i = 0; i < list.length; i++) {
    node = list[i];
    if (node.parentId) {
      if (dict[node.parentId]) {
        dict[node.parentId].children = dict[node.parentId].children || [];
        dict[node.parentId].children.push(node);
      } else {
        // let errorMessage = `数组里没有id为：${node.parentId}节点，所以忽略了ID为${node.id}的插入节点。`;
        // throw errorMessage;
        console.error(
          `数组里没有id为：${node.parentId}节点，所以忽略了ID为${node.id}的插入节点。`
        );
      }
    } else {
      resTree.push(node);
    }
  }
  console.log(JSON.stringify(resTree));
  return resTree;
}

listToTree(arr1);
