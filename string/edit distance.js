function editDistRec(s1,s2,m,n){
    if(m === 0)
        return n;
    if(n === 0)
        return m;
    if(s1[m-1] === s2[n-1])
        return editDistRec(s1, s2, m-1, n-1);
    return 1+ Math.min(editDistRec(s1, s2, m, n-1), 
    editDistRec(s1,s2,m-1, n),
    editDistRec(s1,s2,m-1,n-1))
    
}
function editDist(s1,s2){
    return editDistRec(s1, s2, s1.length, s2.length)
}

const s1 = "GEEXSFRGEEKKS";
const s2 = "GEEKSFORGEEKS";

console.log(editDist(s1,s2));