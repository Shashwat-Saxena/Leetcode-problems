function medianofTwoSortedArrays(arr1, arr2){
    const arr3 = arr1.concat(arr2);

    arr3.sort((a,b)=>a-b);

    const n= arr3.length;

    if(n%2 === 0){
        const mid1 = n/2;
        const mid2 = mid1-1;
        return (arr3[mid1]+arr3[mid2])/2;
    }else{
        return arr3[Math.floor(n/2)];
    }
}

const arr1 = [1,7,9,6,5]
const arr2 = [2,8,6,0,4]

console.log(medianofTwoSortedArrays(arr1,arr2))