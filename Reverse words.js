function reverseWords(str) {
    let words = str.split(' ');
    let reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}





function reverseWords(str) {
    let reversedWord = '';
    let reversedStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
        reversedWord = str[i] + reversedWord;
    } else {
        reversedStr += reversedWord + ' ';
        reversedWord = '';
    }
    }
    return reversedStr + reversedWord;
}






console.log(reverseWords("halludba nawas"))