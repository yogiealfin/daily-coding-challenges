function findMedianSortedArray(nums1, nums2) {
  const sortedArr = nums1.concat(nums2).sort((a, b) => a - b);
  const len = sortedArr.length;

  if (len % 2) {
    return sortedArr[Math.floor(len / 2)];
  } else {
    const mid = len / 2;
    return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
  }
}
