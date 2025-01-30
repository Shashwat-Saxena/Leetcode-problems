class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function Recleftview(root,level,maxlevel, result){
    if(root === null)
        return ;
    if(level>maxlevel[0]){
        result.push(root.data);
        maxlevel[0]=level;
    }
    Recleftview(root.left, level+1,maxlevel,result);
    Recleftview(root.right,level+1,maxlevel,result);

}
function leftview(root){
    let result = [];
    let maxlevel = [-1];
    Recleftview(root,0,maxlevel,result);
    return result;
}
function PrintArray(arr){
    console.log(arr.join(''));
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let result = leftview(root);
PrintArray(result);