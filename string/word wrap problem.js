function calculatecost(curr,n,arr,k){
    if(curr >=n){
        return 0;
    }
    let sum =0;
    let ans = Infinity;
    for(let i=curr; i<n; i++){
        sum+= arr[i];
        let tot = sum +(i-curr);
        if(tot > k){
            break;
        }
        if(i !== n-1){
            let temp = (k-tot)*(k-tot)+ calculatecost(i+1, n, arr, k);
            ans = Math.min(ans,temp);
        }else{
            ans = 0;
        }
    }
    return ans;
}
function solvewordwrap(arr,k){
    let n = arr.length;
    return calculatecost(0,n, arr, k);
}

const arr = [3,2,2,5];
const k = 6;
const res = solvewordwrap(arr,k);
console.log(res);