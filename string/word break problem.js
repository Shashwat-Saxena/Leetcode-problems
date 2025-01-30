function wordbreakhelper(s,dictset, curr, res, start){
    if(start === s.length){
        res.push(curr);
        return;
    }
    for(let end = start+1; end<=s.length; ++end){
        let word = s.substring(start, end)
        if(dictset.has(word)){
            let prev = curr;
            if(curr.length>0){
                curr += "";
            }
            curr +=word;

            wordbreakhelper(s,dictset,curr,res,end);
            curr = prev;
        }
    }
}
function wordbreak(s,dict){
    let dictset = new Set(dict);
    let res = [];
    let curr = "";

    wordbreakhelper(s,dictset,curr.res,0);
    return res;
}

let s = "ilikesamsungmobile";
let dict=["i","like","sam","sung", "samsung", "mobile", "ice","and","cream", "icecream", "man", "go", "mango"];
let result = wordbreak(s,dict);
result.forEach((sentence)=>{
    console.log(sentence);
})

// not done