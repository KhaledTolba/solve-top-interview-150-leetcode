/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let max = -Infinity;

    while(start < end) {
        let b = end - start;
        let h = Math.min(height[start], height[end]);
        if (h * b > max) {
            max = h * b;
        }
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return max;

};