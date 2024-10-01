function filter_list(arr) {
    let res = arr.filter((a) =>  (typeof a === 'number'));
    return res
}

function filter_list(arr) {
    let newArray = []
    for (let i = 0 ; i<arr.length ; i++){
        if (typeof arr[i] === 'number'){
            newArray.push(arr [i]);
        }
    }
    return newArray
}






console.log(filter_list([1,2,'a','b'])); //[1,2]
console.log(filter_list([1,'a','b',0,15])); //[1,0,15]
console.log(filter_list([1,2,'aasf','1','123',123])); //[1,2,123]