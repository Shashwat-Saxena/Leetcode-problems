function countbits(a){
    let count = 0;
    while(a>0){
        if((a & 1) > 0)
            count += 1;
        a= a>>1;
    }
    return count;
}
function insertionsort(arr, aux, n){
    for(let i=1; i<n; i++){
        let key1 = aux[i];
        let key2 = arr[i];
        let j= i-1;

        while(j >=0 && aux[j] < key1){
            aux[j+1] = aux[j];
            arr[j+1] = arr[j];
            j = j-1;
        }
        aux[j+1] = key1;
        arr[j+1] = key2;
    }
}
function sortbysetcount(arr,n){
    let aux = new Array(n);
    for(let i = 0; i<n; i++)
        aux[i] = countbits(arr[i]);
    insertionsort(arr, aux, n)
}

function printArr(arr,n){
    for(let i=0; i<n; i++)
        console.log(arr[i] + "");
}

let arr = [1,2,3,4,5,6];
let n = arr.length;
sortbysetcount(arr,n);
printArr(arr,n);