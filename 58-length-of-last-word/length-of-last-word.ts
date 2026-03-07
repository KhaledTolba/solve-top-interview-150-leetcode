function lengthOfLastWord(s: string): number {
    const list: string[] = s.split(' ');
    for(let i = list.length-1; i >= 0; i--) {
        if(list[i])
            return list[i].length;
    }
};
