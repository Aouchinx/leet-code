/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
  // 双指针迭代解法
  const dummy = new ListNode(-101)
  let p = dummy,
    p1 = list1,
    p2 = list2

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }

  if (p1 !== null) p.next = p1
  else if (p2 !== null) p.next = p2

  return dummy.next
}
// @lc code=end

const mergeTwoLists1 = (list1, list2) => {
  // 递归解法
  if (list1 === null) return list2
  else if (list2 === null) return list1
  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
}