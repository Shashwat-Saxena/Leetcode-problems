function maxarea(mat){
    let n = mat.length, m = mat[0].length;
    let memo = Array.from({length:n},() =>
    Array(m).fill(0));
    let ans = 0;
    for(let i = 0; i<n; i++){
        for(let j=0; j<m; j++){
            if(mat[i][j] === 0)
                continue;

            if(j === 0) memo[i][j] = 1;
            else memo[i][j] = 1+memo[i][j-1];

            let width = memo[i][j];
            for(let k=i; k>=0; k--){
                width = Math.min(width, memo[k][j]);
                let area = width * [i-k+1];
                ans = Math.max(ans,area);
            }
        }
    }
    return ans;
}

let mat = [
    [0,1,1,0],
    [1,1,1,1],
    [1,1,1,1],
    [1,1,1,1]
]
console.log(maxarea(mat))