function arithmetic(a, b, operator){
    if (operator === 'add'){
        return a + b
    }else if(operator === 'subtract'){
        return a - b
    }else if(operator === 'multiply'){
        return a*b
    }else if(operator === 'divide'){
        return a / b
    }
}

const arithmetic = (a, b, operator) => {
    return  ( 
        operator === "add" ? a + b : operator === "subtract" ? a - b : operator === "multiply" ? a * b : a / b
    )
}



function arithmetic(a, b, operator){
    return ops[operator](a, b);
}
    const ops = {
    "add"      : (a, b) => a + b,
    "subtract" : (a, b) => a - b,
    "multiply" : (a, b) => a * b,
    "divide"   : (a, b) => a / b
}
console.log(arithmetic(5,2,"add")); // 7
console.log(arithmetic(5,2,"subtract")); //3
console.log(arithmetic(5,2,"multiply")); //10
console.log(arithmetic(5,2,"divide")); //2.5