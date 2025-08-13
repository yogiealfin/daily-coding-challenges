# 0003 - Longest Substring Without Repeating Characters

**Level:** Medium  
**Language:** JavaScript  
**Challenge Link:** [LeetCode - Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

---

## 📝 Challenges Description

Given a string s, find the length of the longest substring without duplicate characters.

---

## 📌 Example

### Example 1

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

### Example 2

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

### Example 3

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## 💡 Constraints

- `0 <= s.length <= 5 * 104`
- `s consists of English letters, digits, symbols and spaces.`

## 🚀 Solution Idea

1. Use a sliding window with two pointers:
   - `left marks the start of the current substring.`
   - `i (loop index) marks the end of the current substring.`
2. Use a Map (seen) to store each character and its last seen index.
3. For each character:
   - `If it was seen before and its last index is within the current window, move left to lastIndex + 1 to avoid duplicates.`
   - `Update the last seen index of the current character in the map.`
4. Calculate the length of the current window as i - left + 1 and update maxLength if it's larger.
5. Return maxLength after processing all characters.

## 🧩 Complexity Analysis

- **Time Complexity:** O(n) — Each character is visited at most twice (once by i, once by left), where n is the length of the string.
- **Space Complexity:** O(min(n, a)) — where a is the character set size. In the worst case, we store all unique characters in the Map.
