function getMinDiff(arr, k){
    const n= arr.length;
    arr.sort((a,b)=> a-b);

    let res = arr[n-1] - arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] - k<0)
            continue;

    let minH = Math.min(arr[0] + k, arr[i]-k);
    let maxH = Math.max(arr[i-1] + k, arr[n-1]-k);
    res = Math.min(res, maxH - minH);    
    }
    return res;
}

const k=6;
const arr = [12,6,4,15,17,10];
const ans = getMinDiff(arr,k);
console.log(ans)