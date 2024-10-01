function printerError(s) {
    let init = 0 ;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "n" || s[i] === "o" || s[i] === "p" || s[i] === "q" ||
            s[i] === "s" || s[i] === "t" || s[i] === "u" || s[i] === "v" || 
            s[i] === 'w' || s[i] === "x" || s[i] === "y" || s[i] === "z" ) {
            init++;
    }
}
    return `${init}/${s.length}`;
}





function printerError(s) {
    // your code
    var count = 0;
    for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
        count++;
    }
    }
    return count+"/"+s.length;
}






function printerError(s) {
    let lengthh = s.length
    let sh = (s.match(/[nopqrstuvwxyz]/ig)||[]).length;
    return `${sh}/${lengthh}`;
}
function printerError(s) {
    const errors = s.split('').filter(c => c > 'm').length;
    return `${errors}/${s.length}`;
}





console.log(printerError("aaabbbbhaijjjm"))// "0/14"
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"))// "8/22"