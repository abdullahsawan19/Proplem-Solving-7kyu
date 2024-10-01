function isTriangle(a,b,c){
    if( a + b > c && a + c > b && b + c > a){
        return true;
    }
    return false
}



function isTriangle(a,b,c)
{
    return a + b > c && a + c > b && c + b > a;
}



console.log(isTriangle(1,2,2));//true
console.log(isTriangle(1,2,3));//false