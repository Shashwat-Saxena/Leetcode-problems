function mergeArray(a,b){
    for(let i =b.length; i>=0; i--){
        if(a[a.length -1] > b[i]){
            let last = a[a.length - 1];
            let j = a.length - 2;

            while(j>=0 && a[j] > b[i]){
                a[j+1] = a[j];
                j--;
            }
            a[j+1] = b[i];
            b[i] = last;
        }
    }
}

const a = [1,5,9,10,15,20];
const b = [2,3,8,13];
mergeArray(a,b);
console.log(a.join(" "));
console.log(b.join(" "));