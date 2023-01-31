/**
 445. 两数相加 II
给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

你可以假设除了数字 0 之外，这两个数字都不会以零开头。

 

示例1：



输入：l1 = [7,2,4,3], l2 = [5,6,4]
输出：[7,8,0,7]
示例2：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[8,0,7]
示例3：

输入：l1 = [0], l2 = [0]
输出：[0]
 

提示：

链表的长度范围为 [1, 100]
0 <= node.val <= 9
输入数据保证链表代表的数字无前导 0
 

进阶：如果输入链表不能翻转该如何解决？

通过次数116,569提交次数193,575
*/
var addTwoNumbers = function (l1, l2) {
  const stack1 = [],
    stack2 = [];
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let curr = null,
    carry = 0;

  while (stack1.length !== 0 || stack2.length !== 0) {
    let sum = 0;
    if (stack1.length !== 0) {
      sum += stack1.pop();
    }
    if (stack2.length !== 0) {
      sum += stack2.pop();
    }
    sum += carry;

    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);

    node.next = curr;
    curr = node;
  }

  if (carry !== 0) {
    const node = new ListNode(carry);
    node.next = curr;
    curr = node;
  }

  return curr;
};
