function getCount(str) {
    let vowelsCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'u'|| str[i] === 'i'
            || str[i] === 'e'|| str[i] === 'o'){
            vowelsCount += 1;
        }
}
    return vowelsCount;
}




function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
}

console.log(getCount("aouieii"));