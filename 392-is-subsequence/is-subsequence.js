/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let str1 = 0;
    if (!s && !t) {
        return true
    }
    for (let str2 = 0; str2 < t.length; str2++) {
        if (s[str1] == t[str2]) {
            str1++;
        }
        if (str1 == s.length) {
            return true;
        }
    }
    return false;
};