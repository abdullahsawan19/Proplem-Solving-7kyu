function openOrSenior(data){
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
}


function openOrSenior(data){
    var result = [];
    data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
        result.push('Senior');
    } else {
        result.push('Open');
    }
    })
    return result;
}



console.log(openOrSenior([[18, 20]])) //["Open"]