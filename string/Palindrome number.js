function checkpalindrome(n){
    let reverse = 0;
    let temp = n;

    while(temp !== 0){
        reverse = (reverse*10)+(temp%10);
        temp = Math.floor(temp/10);
    }
    return reverse === n;
}

let n = "1221";
if(checkpalindrome(n)){
    console.log("true")
}else {
    console.log("false")
}