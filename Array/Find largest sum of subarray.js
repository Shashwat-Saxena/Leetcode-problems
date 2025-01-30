// function maxSubarraySum(arr){
//     let res = arr[0];

//     for(let i=0; i<arr.length; i++){
//         let currsum = 0;

//         for(let j=i; j=arr.length; j++){
//             currsum = currsum + arr[j]

//             res = Math.max(res, currsum);
//         }
//     }
//     return res;
// }

// const arr = [2,3,-8,7,-1,2,3]
// console.log(maxSubarraySum(arr));


// <-----second method------->

function maxSubarraySum(arr){
    let res = arr[0];
    let maxEnding = arr[0];

    for(let i=1; i<arr.length; i++){
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);

        res = Math.max(res, maxEnding);
    }
    return res;
}

const arr = [2,3,-8,7,-1,2,3];
console.log(maxSubarraySum(arr));