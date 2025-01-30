function calculatefactorial(n){
    var fact = 1n;
    for(let i = 2n; i<=n; i++){
        fact *= i;
    }
    return fact;
}

const num = 5;
const factorial = calculatefactorial(num);
console.log(`The factorial of ${num} "${factorial}"`);