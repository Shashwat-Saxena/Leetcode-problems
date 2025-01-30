function foursum(arr,target){
    let res = [];
    let n = arr.length;

    for(let i=0; i<n; i++){
        for(let j= i+1; j<n; j++){
            for(let k = j+1; k<n; k++){
                for(let l = k+1; l<n; l++){
                    if(arr[i] + arr[j] + arr[k] + arr[l] === target){
                        let curr = [arr[i], arr[j], arr[k], arr[l]];
                        curr.sort((a,b) => a-b);

                        if(!res.some(x => x.join() === curr.join())){
                            res.push(curr);
                        }
                    } 
                }
            }
        }
    }
    return res;
}

let arr = [0,1,0,2,1,2,2];
let target = 3;
let ans = foursum(arr,target)
ans.forEach(v=> console.log(v.join("")));