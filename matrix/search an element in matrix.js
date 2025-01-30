function search(mat, n, x){
    let i=0, j=n-1;
    while(i<n && j>=0){
        if(mat [i][j] == x){
            console.log("element found at ("+ i+","+j+")");
            return;
        }
        if(mat[i][j] > x)
            j--;
        else
            i++;
    }
    console.log("Element not found");
    return;
}

let mat = [
    [10,20,30,40],
    [15,25,35,45],
    [27,29,37,48],
    [32,33,39,50]
]

search(mat,4,29);

// again 