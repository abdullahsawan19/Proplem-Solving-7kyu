function sortByLength(array) {
    let a = array.sort((a, b) => a.length - b.length);
    return a;
}









console.log(sortByLength(["s","saw","sa","sawan","sawa"])) //[s,sa,saw,sawa,sawan]