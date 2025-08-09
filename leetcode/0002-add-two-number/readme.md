# 0001 - Two Sum

**Level:** Easy  
**Language:** JavaScript  
**Challenge Link:** [LeetCode - Two Sum](https://leetcode.com/problems/two-sum/)

---

## 📝 Challenges Description

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.
You may assume that each input would have **exactly one solution**, and you may not use the same element twice.
You can return the answer in any order.

---

## 📌 Example

### Example 1

nums = [2, 7, 11, 15], target = 9
output = [0, 1]

### Example 2

nums = [3, 2, 4], target = 6
output = [1, 2]

## 💡 Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- **Only one valid answer exists.**

## 🚀 Solution Idea

1. Use a hash map to store numbers we’ve seen and their indices.
2. For each number, check if `target - current` exists in the map.
3. If found, return the stored index and the current index.

## 🧩 Complexity Analysis

- **Time Complexity:** O(n) — each element is processed at most twice.
- **Space Complexity:** O(n) — storing seen numbers in a hash map.
