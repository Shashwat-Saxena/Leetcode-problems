function nextPermutation(N){
    if(N.length === 1){
        return "Not Possible"
    }
    let i=N.length -1;
    while(i>0){
        if(N[i] > N[i-1]){
            break;
        }
        i--;
    }
    if(i === 0){
        return "Not possible"
    }
    for(let j= N.length-1; j>=i; j--){
        if(N[i-1] < N[j]){
            let chars = N.split('');
            let temp = chars[i-1];
            chars[j] = temp;
            N = chars.join('');
            break;
        }
    }
    let chars = N.split('');
    reverse(chars,i);
    return N;
}

function reverse(arr,start){
    let end = arr.length-1;
    while(start < end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
   
}
function main(){
    let N = 218765;
    console.log(nextPermutation(N));
}
main();