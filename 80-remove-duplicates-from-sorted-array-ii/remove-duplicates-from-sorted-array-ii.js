/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let s = 0;
    let f = 1;
    let c = 0;
    
    while (f < nums.length) {
        if(nums[s] == nums[f]) {
            c++;
            if (c > 1) {
            nums.splice(f, 1);
            continue;
            } 
        } else {
            c = 0;
            s = f;
        }
        f++;
    }
    return nums.length;

};