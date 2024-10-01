function longest(s1, s2) {
    let  sum= s1 + s2;
    let newArray = [] ;
    let final = sum.split("").sort()
    for (let i = 0; i < final.length; i++) {
        if (final[i] !== final[i+1]){
            newArray.push(final[i])
        }
    }
    return newArray.join("");
}




const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')





function longest(s1, s2) {
    return Array.from(new Set(s1 + s2)).sort().join('');
}





console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
//"abcdefklmopqwxy"

console.log(longest("abcdefghijklmnopqrstuvwxyz",));
                  //"abcdefghijklmnopqrstuvwxyz"