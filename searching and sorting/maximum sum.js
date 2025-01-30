function maxsumrec(arr,n){
    if(n <=0)
        return 0
    if( n===1)
        return arr[0];

    let pick = arr[n-1] + maxsumrec(arr, n-2)
    let notpick = maxsumrec(arr, n-1);
    return Math.max(pick, notpick)
}

function maxsum(arr){
    let n = arr.length;

    return maxsumrec(arr,n)
}

let arr = [6,7,1,3,8,2,4];
console.log(maxsum(arr));