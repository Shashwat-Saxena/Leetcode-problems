var R = 4;
var C = 4;
function first(arr,low,high){
    if(high >= low){
        var mid = low + parseInt((high - low)/2);

        if((mid == 0 || arr[mid -1] == 0 ) && arr[mid] == 1)
            return mid;
        else if(arr[mid] == 0)
            return first(arr,(mid+1),high);
        else return first(arr, low,(mid - 1));
    }
    return -1;
}
function rowwithmaxis(mat){
    var max_row_index = 0;
    max = -1;

    var i , index;
    for(i=0; i<R; i++){
        index = first(mat[i],0,C-1);
        if(index != -1 && C-index > max){
            max = C - index;

            max_row_index = i;
        }
    }
    return max_row_index;
}

var mat = [
    [0,0,0,1],
    [0,1,1,1],
    [1,1,1,1],
    [0,0,0,0]
];

console.log("index of row with maximum 1s is" + rowwithmaxis(mat));