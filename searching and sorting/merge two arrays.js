function mergetwoarrays(arr1,arr2){
    let arr3 = arr1.concat(arr2)
    arr3.sort((a,b)=> a-b);
    return arr3;
}

let arr1 = [1,3,5,7]
let arr2 = [2,4,6,8];
let arr3 = mergetwoarrays(arr1,arr2);
console.log(arr3.join(""));