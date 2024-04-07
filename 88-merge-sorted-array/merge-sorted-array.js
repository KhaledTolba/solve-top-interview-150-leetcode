/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums1[j] == 0 && j >= m+i) {
                nums1[j] = nums2[i];
                break;
            } else if (nums2[i] < nums1[j]) {
                for (let c = m+i; c > j; c--) {
                    nums1[c] = nums1[c-1];
                }
                nums1[j] = nums2[i];
                break;
            }
        }
    }
};