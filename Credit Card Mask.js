function maskify(cc) {
    return cc.replace(cc.slice(0, -4) , "#".repeat(cc.length - 4 ))
}




function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}




const maskify = cc =>
    cc.replace(/.(?=.{4})/g, `#`);






function maskify(cc) {
    return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}



function maskify(cc) {
    let masked = '';
    let lastFour = cc.substr(-4);
    for (var i = 0; i < cc.length - 4; i++) {
        masked += '#';
    }
    return masked + lastFour;
}



console.log(maskify("Skippy")); //##6516