function dontGiveMeFive(start, end){
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (!String(i).includes("5")){
            count++;
        }
    }
    return count;
}

function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
    if (!/5/.test(i)) {
        count++;
    }
    }
    return count;
}





function dontGiveMeFive(start, end){
    let res = [];
    for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) res.push(i);
    }
    return res.length;
}


console.log(dontGiveMeFive(1,9))