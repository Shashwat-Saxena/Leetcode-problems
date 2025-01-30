function findsubarrays(arr,n){
    let out = [];
    for(let i=0; i<n; i++){
        let prefix = 0;
        for(let j = i; j<n; j++){
            prefix += arr[j];
            if(prefix == 0)
                out.push([i,j]);
        }
    }
    return out;
}
function print(out){
    for(let it of out)
        console.log("subarray found from index" + it[0]+ "to"+ it[1]);

   
}
let arr = [6,3,-1,-3,4,-2,2,4,6,-12,-7]
let n = arr.length;

let out = findsubarrays(arr,n);
if(out.length == 0){
    console.log("no subarrays exists");
}else{
    print(out);
}