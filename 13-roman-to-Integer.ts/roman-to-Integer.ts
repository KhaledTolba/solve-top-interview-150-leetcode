function romanToInt(s: string): number {
    const ROMAN: Record<string, number> = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let sum: number  = 0;
    for(let i=0; i < s.length; i++){
        if(s.length-1 === i)
            sum += ROMAN[s[i]];
        else if (ROMAN[s[i]] < ROMAN[s[i+1]])
            sum -= ROMAN[s[i]];
        else
            sum += ROMAN[s[i]];
    }
    return sum;
};
