/**
19. 删除链表的倒数第 N 个结点
中等
2.3K
相关企业
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

 

示例 1：


输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
 

提示：

链表中结点的数目为 sz
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 

进阶：你能尝试使用一趟扫描实现吗？

通过次数
978.4K
提交次数
2.2M
通过率
44.8%
*/

var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode();
  dummy.next = head;

  let n1 = dummy;
  let n2 = dummy;
  for (let i = 0; i < n; i++) {
    n2 = n2.next;
  }
  while (n2.next != null) {
    n1 = n1.next;
    n2 = n2.next;
  }
  n1.next = n1.next.next;
  return dummy.next;
};
