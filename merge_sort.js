function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }

  const mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);

  left = mergeSort(left);
  right = mergeSort(right);

  const output = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      output.push(left.shift());
    } else {
      output.push(right.shift());
    }
  }

  return [...output, ...left, ...right];
}

var merge = function (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m);
  nums2 = nums2.slice(0, n);

  return mergeSort([...nums1, ...nums2]);
};

console.log(merge([2, 1, 3, 0, 0, 0], 3, [2, 6, 5], 3));
