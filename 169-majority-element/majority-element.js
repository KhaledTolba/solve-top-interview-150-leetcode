/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let freq = {};
    let max = -Infinity;
    let v = 0;
    for(let val of nums) {
        freq[val] = (freq[val] || 0) + 1;
        if (max < freq[val]) {
            max = freq[val];
            v = val;
        }
    }
    
    return v;
};