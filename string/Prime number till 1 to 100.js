function isPrime(num){
    for(let i = 2; i<=Math.sqrt(num); i++){
        if(num%i === 0){
            return false;
        }
    }
    return num>1;
}
function printPrimeNumbers(n){
    for(let i=2; i<=n; i++){
        if(isPrime(i)){
            console.log(i)
        }
    }
}
printPrimeNumbers(100);