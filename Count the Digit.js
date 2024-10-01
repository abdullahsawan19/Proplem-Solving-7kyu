function nbDig(n, d) {
    let k = 0;
    let newArray = [];
    if ((n >= 0) && (0 <= d && d <= 9)) {
        for (let i = 0; i <= n; i++) {
            newArray.push(i * i);
        }
    }
    newArray.forEach((square) => {
        k += square.toString().split(d.toString()).length - 1;
    });
    return k;
}




function nbDig(n, d) {
    var res=0;
        for (var g=0;g<=n;g++){
            var square=(g*g+"").split("");
            square.forEach((s)=>s==d?res++:null)
        }return res;
    }




console.log(nbDig(10,1))