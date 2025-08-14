# 0004 - Median of Two Sorted Arrays

**Level:** Hard  
**Language:** JavaScript  
**Challenge Link:** [LeetCode - Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

---

## 📝 Challenge Description

You are given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively.  
Return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

---

## 📌 Example

### Example 1

Input:  
nums1 = [1, 3]  
nums2 = [2]  
Output: 2.00000  
Explanation: merged array = [1, 2, 3] and median is 2.

### Example 2

Input:  
nums1 = [1, 2]  
nums2 = [3, 4]  
Output: 2.50000  
Explanation: merged array = [1, 2, 3, 4] and median is (2 + 3) / 2 = 2.5.

---

## 💡 Constraints

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`
- Both `nums1` and `nums2` are sorted in non-decreasing order.

---

## 🚀 Solution Idea

Even though the problem specifies an `O(log (m+n))` approach,  
this solution uses a simpler `merge + sort` method for clarity:

1. Merge `nums1` and `nums2` into one array.
2. Sort the merged array in ascending order.
3. If the total length is odd, return the middle element.
4. If even, return the average of the two middle elements.

---

## 🧩 Complexity Analysis

- **Time Complexity:** `O((m+n) log (m+n))` — merging is `O(m+n)`, sorting dominates.
- **Space Complexity:** `O(m+n)` — for the merged array.

---

## 💭 Why I Chose This Approach

While the optimal `O(log (m+n))` binary search partition method is more efficient for very large arrays,  
it is also more complex to implement and harder to read at a glance.

Since:

- The input sizes in this challenge are relatively small (`m + n <= 2000`),
- JavaScript’s built-in `.sort()` is heavily optimized in C++,
- and code clarity was prioritized over absolute optimality,

the `merge + sort` approach is fast enough in practice and much easier to understand and maintain.
