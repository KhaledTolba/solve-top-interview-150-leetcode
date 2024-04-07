/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let mul = 10;
    let str = "";
    let oprNum = 0;
    while (num != 0) {
        oprNum = num % mul;
        if (oprNum < 4) {
            for(i = 0; i < oprNum; i++) {
                str = "I" + str;
            }
        } else if (oprNum == 4) {
            str = "IV" + str;
        } else if (oprNum == 5) {
            str = "V" + str;
        } else if (oprNum > 5 && oprNum < 9) {
            for(i = 0; i < (oprNum-5); i++) {
                str = "I" + str;
            }
                str = "V" + str;
        } else if (oprNum == 9) {
            str = "IX" + str;
        } else if (oprNum == 10) {
            str = "X" + str;
        } else if (oprNum < 40) {
            for(i = 0; i < oprNum/10; i++) {
                str = "X" + str;
            }
        } else if (oprNum == 40) {
            str = "XL" + str;
        } else if (oprNum == 50) {
            str = "L" + str;
        } else if (oprNum > 50 && oprNum < 90) {
            for(i = 0; i < ((oprNum-50)/10); i++) {
                str = "X" + str;
            }
                str = "L" + str;
        } else if (oprNum == 90) {
            str = "XC" + str;
        } else if (oprNum == 100) {
            str = "C" + str;
        } else if (oprNum < 400) {
            for(i = 0; i < oprNum/100; i++) {
                str = "C" + str;
            }
        } else if (oprNum == 400) {
            str = "CD" + str;
        } else if (oprNum == 500) {
            str = "D" + str;
        } else if (oprNum > 500 && oprNum < 900) {
            for(i = 0; i < ((oprNum-500)/100); i++) {
                str = "C" + str;
            }
                str = "D" + str;
        } else if (oprNum == 900) {
            str = "CM" + str;
        } else if (oprNum == 1000) {
            str = "M" + str;
        } else if (oprNum < 4000) {
            for(i = 0; i < oprNum/1000; i++) {
                str = "M" + str;
            }
        }

        num -= oprNum;
        mul *= 10;
    }
    return str;
};