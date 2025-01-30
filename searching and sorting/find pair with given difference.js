function findpair(arr,diff){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i === j){
                continue;
            }
            if(arr[j] - arr[i] === diff){
                console.log(`pair found : ${arr[i]}, ${arr[j]}`);
                return;
            }
        }
    }
    console.log('no such pair');
}

const arr = [1,8,30,40,100]
const diff = -30;
findpair(arr,diff)