function longestCommonPrefix(strs: string[]): string {
    let prefix = "";
    for(let j = 0; j < strs[0].length; j++){
        for(let i = 1; i < strs.length; i++) {
            if(strs[0][j] != strs[i][j]) {
                return prefix;
            }
        }
        prefix += strs[0][j];
    }
    return prefix;
};
