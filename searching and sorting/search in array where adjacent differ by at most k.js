function search(arr, n, x, k){
    var i = 0;
    while(i<n){
        if(arr[i] == x)
            return i;
        i = i+Math.max(1,Math.abs(arr[i]-x)/k);

    }
    console.log("number is not present!")
    return -1;
}

var arr = [2,4,5,7,7,6];
var x = 6;
var k = 2;
var n= arr.length;
console.log("element"+x+ "is present at index"+ search(arr,n,x,k));