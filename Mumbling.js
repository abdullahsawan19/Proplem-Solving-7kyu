function accum(s) {
	let arr = s.split('');
    let newArray =[];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i].toUpperCase() +
        Array(i + 1).join(arr[i].toLowerCase()));
    }
    return newArray.join('-');
}

function accum (s) {
	return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
    }).join('-');
}




function accum(s) {
    return s
    .split('')
    .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
    .join('-')
}




console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));// "C-Ww-Aaa-Tttt"