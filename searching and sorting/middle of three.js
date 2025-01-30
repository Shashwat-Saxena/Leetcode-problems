function middleofthree(a,b,c){
    if((a<b && b<c) || (c<b && b<a))
        return b;
    else if((b<a && a<c) || (c<a && a<b))
        return a;

    else 
        return c;
}

let a= 20, b=30, c=40
console.log(middleofthree(a,b,c));