function binarySearch(arr, low, high, key){
    if(high < low)
        return -1;

    let mid = Math.trunc((low +high)/2);
    if(key == arr[mid])
        return mid;

    if(key > arr[mid])
        return binarySearch(arr,(mid+1),high,key)

    return binarySearch(arr, low,(mid-1),key);
}

let arr= [5,6,7,8,9,10];

let n, key;

n= arr.length;

key = 10;

console.log("Index:"+ binarySearch(arr, 0 , n-1, key));