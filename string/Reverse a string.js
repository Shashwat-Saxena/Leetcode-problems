function reverseString(s){
    let res = [];

    for(let i=s.length-1; i>=0; i-- ){
        res.push(s[i])
    }
    return res.join('');
}

const s= "hello";
console.log(reverseString(s))