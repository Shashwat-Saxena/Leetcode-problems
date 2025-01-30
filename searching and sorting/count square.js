function countsquare(m,n){
    if(n<m)
    [m,n] = [n,m];
return m*(m+1)*(2*m+1)/6+(n-m)*m*(m+1)/2;
}

let m= 4;
let n= 3;
console.log("count of square is"+ countsquare(n,m));