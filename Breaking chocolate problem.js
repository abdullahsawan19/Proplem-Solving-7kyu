function breakChocolate(n,m) {
    if ( n > 0 && m > 0){
        return (n*m)-1;
    }else{
        return 0 ;
    }
}



function breakChocolate(n,m) {
    return (n*m === 0) ? 0 : n * m - 1;
}




function breakChocolate(n,m) {
    return Math.max(n*m-1,0);
}



console.log(breakChocolate(5,5));
console.log(breakChocolate(-9,5));
console.log(breakChocolate(5,2));