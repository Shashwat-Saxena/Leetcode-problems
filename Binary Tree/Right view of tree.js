class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function recursiveRightview(root, level, maxLevel, result){
    if(root === null)return;
    if(level > maxLevel[0]){
        result.push(root.data);
        maxLevel[0] = level;
    }
    recursiveRightview(root.right,level+1,maxLevel,result)
    recursiveRightview(root.left, level+1,maxLevel,result);
}
function rightview(root){
    let result = [];
    let maxLevel = [-1];

    recursiveRightview(root,0,maxLevel,result);
    return result;
}
function PrintArray(arr){
    console.log(arr.join(' '));
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

let result = rightview(root);
PrintArray(result);