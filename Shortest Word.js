function findShort(s){
    var s = s.split(" ");
    let newArray = [];
    for (let i = 0 ; i < s.length ; i++){
        newArray.push(s[i].length);
    }
    return Math.min(...newArray);
}


function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}


function findShort(s) {
    return s.split(' ').reduce((min, word) => Math.min(min, word.length), Infinity);
}





console.log(findShort("Let's travel abroad shall we")); // 2