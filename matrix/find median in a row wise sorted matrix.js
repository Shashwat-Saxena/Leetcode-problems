function findMedian(matrix){
    const arr = matrix.reduce((acc,row)=> acc.concat(row),[]);

    arr.sort((a,b)=> a-b);
    const mid = Math.floor(arr.length/2);
    let median ;
    if(arr.length%2===0){
        median = (arr[mid-1] + arr[mid])/2;
    }else{
        median = arr[mid];
    }
    return median;
}

const matrix = [
    [1,3,9],
    [2,6,9],
    [3,6,9]
]

const median = findMedian(matrix);
console.log("Median of matrix:" + median);