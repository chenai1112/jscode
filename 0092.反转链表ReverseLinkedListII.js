/**
92. 反转链表 II
中等
1.4K
相关企业
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 

示例 1：


输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
 

提示：

链表中节点数目为 n
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 

进阶： 你可以使用一趟扫描完成反转吗？

通过次数
356.6K
提交次数
641.7K
通过率
55.6%
 */

var reverseBetween = function (head, m, n) {
  let prev = null;
  let curr = head;
  for (let i = 1; i < m; i++) {
    prev = curr;
    curr = curr.next;
  }

  let prev2 = prev;
  let curr2 = curr;

  for (let i = m; i <= n; i++) {
    [curr.next, prev, curr] = [prev, curr, curr.next];
  }
  if (m > 1) {
    prev2.next = prev;
  } else {
    head = prev;
  }
  curr2.next = curr;
  return head;
};
