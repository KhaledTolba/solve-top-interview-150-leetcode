/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if(s=="") {
        return true;
    }

    let start = 0;
    let end = s.length;
    while (start < end) {
        if (s[start] == s[end-1]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;

};