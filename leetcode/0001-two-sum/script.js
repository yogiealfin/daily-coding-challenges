function twoSums(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // The value we need to find to reach the target
    const complement = target - nums[i];
    // If we've seen the complement before, return the pair of indices
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    // Store current number with its index for future lookups
    map.set(nums[i], i);
  }
  // Return an empty array if loop finishes with no match
  return [];
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSums(nums, target);
console.log(result); // output [0,1]
