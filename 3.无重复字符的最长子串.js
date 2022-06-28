/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let max = 0,
    left = 0
  const map = new Map()
  for (let i = 0; i < s.length;) {
    let c = s[i]
    if (map.has(c)) left = Math.max(left, map.get(c))
    map.set(c, ++i)
    max = Math.max(max, i - left)
  }
  return max
};
// @lc code=end
