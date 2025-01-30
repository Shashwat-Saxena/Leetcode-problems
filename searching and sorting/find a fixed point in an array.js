function linearsearch(arr,n){
    let i;
    for(i=0; i<n; i++){
        if(arr[i] == i)
            return i;
    }
    return -1;
}

let arr = [-10,-1,0,3,10,11,30,50,100]
let n= arr.length;
console.log("fixed point is"+ linearsearch(arr,n));