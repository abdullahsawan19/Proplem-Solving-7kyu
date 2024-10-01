
String.prototype.toJadenCase = function(){
    let arr = this.split(' ');
    let newArray = []
    for (let i = 0; i < arr.length; i++){
        let firstLetter = arr[i][0].toUpperCase();
        let restOfWord = arr[i].slice(1).toLowerCase();
        newArray.push(firstLetter + restOfWord);
    }
    return newArray.join(" ");
};





String.prototype.toJadenCase = function() {
    return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};





String.prototype.toJadenCase = function () {
    var words = this.split(' ');
    for(var i = 0, wordsLen = words.length; i < wordsLen; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
};






let str = "How can mirrors be real if our eyes aren't real"
console.log(str.toJadenCase());