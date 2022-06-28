/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]
  if (lists.length === 2) return mergeTwoLists(lists[0], lists[1])
  return mergeTwoLists(mergeKLists(lists.splice(0, Math.floor(lists.length / 2))), mergeKLists(lists))
};

function mergeTwoLists(list1, list2) {
  const dummy = new ListNode(-1)
  let p = dummy, p1 = list1, p2 = list2
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
