/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target-nums[i]);
        if (index != i && index != -1) {
             return [i,index];
        }
    }
    return null;
};