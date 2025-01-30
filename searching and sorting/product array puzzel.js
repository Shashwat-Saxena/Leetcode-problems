function productexceptself(arr){
    let n = arr.length;
    let prod = new Array(n).fill(1);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i !== j){
                prod[i] *= arr[j];
            }
        }
    }
    return prod;
}
let arr = [10,3,5,6,2];
let res = productexceptself(arr);
console.log(res.join(""));