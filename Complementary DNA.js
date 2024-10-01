function DNAStrand(dna) {
    let ggg = g.split("");
    let newArray = []
    for (let i = 0; i < ggg.length; i++) {
        if (ggg[i] == "A" ){
            newArray.push("T")
        }else if (ggg[i] == "T" ){
            newArray.push("A")
        }else if (ggg[i] == "G" ){
            newArray.push("C")
        }else if (ggg[i] == "C" ){
            newArray.push("G")
        }
    }
    return newArray.join("")
}



function DNAStrand(dna){
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}


function DNAStrand(dna){
    var code = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
    }
    return dna.split('').map(function(i) { return code[i] }).join('')
}


function DNAStrand(dna) {
    return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
    })
}

    DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}



console.log(DNA("ATTGC")) //"TAACG"
console.log(DNA("GTAT")) //"CATA"