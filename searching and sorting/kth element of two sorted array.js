function kth(arr1, arr2,n,m,k){
    var sorted1 = Array(m + n).fill(0);
    var i=0; j=0; d=0;
    while( i<n && j<m){
        if(arr1[i] < arr2[j])
            sorted1[d++] = arr1[i++];
        else sorted1[d++] = arr2[j++];
    }
    while(i<n)
        sorted1[d++] = arr[i++];
    while(j<m)
        sorted1[d++] = arr2[j++];
    return sorted1[k-1];
}

var arr1 = [2,3,6,7,9]
var arr2 = [1,4,8,10]
var k = 5;
console.log(kth(arr1,arr2,5,4,k));