function check(str){
    let s=[];
    for(let i=0; i<str.length; i++){
        let c = str[i];
        if(c === '('){
            s.push('(');
        }else if(c === ')'){
            if(s.length === 0){
                return 0;
            }else{
                let p = s[s.length-1];
                if(p === '('){
                    s.pop();
                }else{
                    return 0;
                }
            }
        }
    }
    if(s.length === 0){
        return 1;
    }else{
        return 0;
    }

   
}
str = "() (()) () (";
if(check(str) === 0){
    console.log("Invalid");
}else{
    console.log("valid")
}