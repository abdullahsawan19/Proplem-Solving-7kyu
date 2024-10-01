function maxNumbre(a,b,c){
    return Math.max(a,b,c);
}





function maxNumbre(a,b,c){
    if (a>b && a>c){
        return a;
    }else if (b>a && b>c){
        return b;
    }else{
        return c;
    }
}






console.log(maxNumbre(10,20,30))