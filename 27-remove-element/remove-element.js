/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = "_";
            for (let j = k; j < nums.length-1; j++) {
                if (j+1 != nums.length-1) {
                     nums[j] = nums[j+1];
                } else {
                    nums[j] = nums[j+1];
                    nums[j+1] = "_";
                }
            }
            // if (nums[i] != "_")
                i--;
        } else if (nums[i] != "_"){
            k++;
        }
    } 
    return k;
};