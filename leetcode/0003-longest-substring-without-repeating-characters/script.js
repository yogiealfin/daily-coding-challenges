function lengthOfLongestSubstring(s) {
  const seen = new Map();
  let left = 0;
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (seen.has(char) && left <= seen.get(char)) {
      left = seen.get(char) + 1;
    }
    seen.set(char, i);
    maxLength = Math.max(maxLength, i - left + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring("abbasedde"));
