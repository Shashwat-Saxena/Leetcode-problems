function reverseArray(arr){
    let left = 0; right = arr.length - 1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}
const arr = [1,4,3,2,6,5];
reverseArray(arr);
console.log(arr.join(''));