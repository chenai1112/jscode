/**
 * 
21. 合并两个有序链表
简单
2.8K
相关企业
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列
通过次数
1.2M
提交次数
1.8M
通过率
66.5%
 */


var mergeTwoLists = function (l1, l2) {
  let curr = new ListNode();
  let dummy = curr;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  if (l1 !== null) {
    curr.next = l1;
  }

  if (l2 !== null) {
    curr.next = l2;
  }

  return dummy.next;
};
