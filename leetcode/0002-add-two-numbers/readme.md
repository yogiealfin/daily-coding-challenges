# 0001 - Two Sum

**Level:** Medium  
**Language:** JavaScript  
**Challenge Link:** [LeetCode - Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

---

## 📝 Challenges Description

ou are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each node contains a single digit.
Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

---

## 📌 Example

### Example 1

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

### Example 2

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]  
Output: [8,9,9,9,0,0,0,1]

## 💡 Constraints

- `The number of nodes in each linked list is in the range [1, 100]`
- `0 <= Node.val <= 9`
- `It is guaranteed that the list represents a number that does not have leading zeros.`

## 🚀 Solution Idea

1. Traverse both linked lists simultaneously.
2. At each step, add the values of the current nodes plus any carry from the previous step.
3. Compute:
   - `digit = sum % 10`
   - `carry = Math.floor(sum / 10)`
4. Create a new node with `digit` and append it to the result list.
5. Move to the next nodes in each list until both lists are fully processed and there’s no carry.

## 🧩 Complexity Analysis

- **Time Complexity:** O(max(m, n)) — where m and n are the lengths of the two lists.
- **Space Complexity:** O(max(m, n)) — to store the result linked list.
