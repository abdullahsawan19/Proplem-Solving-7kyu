function isIsogram(str){
    var str = str.toLowerCase().split("").sort();
    for ( var i = 0; i<str.length ; i++){
        if (str[i]==str[i+1]){
            return false;
        }
    }
    return true;
}




function isIsogram(str){
	return new Set(str.toLowerCase()).size == str.length;
}


console.log(isIsogram("Dermatoglyphics"));//true
console.log(isIsogram("aba"));//false
console.log(isIsogram("moOse"));//false