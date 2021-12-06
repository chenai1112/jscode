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
  { id: 10, after: 11 },
];

function arrayToList(arr) {
  if (!arr.length) {
    return null;
  }
  // 链表头
  let head = { next: null };
  let preNode = head;
  let node = null;
  let fristNode = null;
  let lastNode = null;
  let beforeNodes = [];
  let afterNodes = [];

  arr.map((item, index, arr) => {
    node = { id: item.id, next: null };
    if (item.first) {
      fristNode = node;
    } else if (item.last) {
      lastNode = node;
    } else if (item.before) {
      // 有befor属性
      beforeNodes.push(item);
    } else if (item.after) {
      // 有after属性
      afterNodes.push(item);
    } else {
      preNode.next = node;
      preNode = node;
    }
  });

  // 查找目标节点的前一个节点
  function findItem(param) {
    const { head, id, target } = param;
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
          break;
        }
      }
      if (node) {
        return preNode;
      } else {
        console.error(
          `数组里没有id为：${target}节点，所以不能执行插入${id}节点操作。`
        );
        // let errorMessage = `数组里没有id为：${target}节点，所以不能执行插入${id}节点操作。`;
        // throw errorMessage;
        return null;
      }
    }
  }

  // 插入目标节点之前
  function inserBefore(param) {
    const { head, beforeNodes } = param;
    let item;
    let preNode;
    while (beforeNodes.length) {
      item = beforeNodes[0];
      const node = { id: item.id, next: null };
      preNode = findItem({ head, id: item.id, target: item.before });
      if (preNode) {
        node.next = preNode.next;
        preNode.next = node;
        beforeNodes.shift();
      } else {
        break;
      }
    }
  }

  // 插入目标节点之后
  function inserAfter(param) {
    const { head, afterNodes } = param;
    let item;
    let preNode;
    while (afterNodes.length) {
      item = afterNodes[0];
      const node = { id: item.id, next: null };
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

  return head;
}

let nodeList = arrayToList(arr);
console.log(JSON.stringify(nodeList));
