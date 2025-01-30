function printtwoelements(arr){
    const n = arr.length;
    const visited = new Array(n+1).fill(false)
    let repeating = -1;
    let missing = -1;

    for(let i=0; i<n; i++){
        if(visited[arr[i]]){
            repeating = arr[i];
        }else{
            visited[arr[i]] = true;
        }
    }
    for(let i=1; i<=n; i++){
        if(!visited[i]){
            missing = i;
            break;
        }
    }
    console.log("Repeating:",repeating);
    console.log("missing:", missing)
}
const arr = [7,3,4,5,5,6,2];
printtwoelements(arr);