function intersection(a,b){
    let res = [];
    let m = a.length;
    let n = b.length;

    for(let i=0; i<m; i++){
        if(i>0 && a[i-1] === a[i]){
            continue;
        }
        for(let j=0; j<n; j++){
            if(a[i] === b[j]){
                res.push(a[i]);{
                    break;
                }
            }
            return res;
        }
        let a= [3,5,10,10,10,15,15,20];
        let b= [5,10,10,15,30]
    
        let res = intersection(a,b);
    
        console.log(res.join(" "));
    }

   
}