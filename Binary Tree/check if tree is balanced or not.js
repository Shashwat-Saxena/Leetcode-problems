class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function height(root){
    if(root == null)
        return 0 

    return Math.max(height(root.left)),height(root.right)+1
}

function isBalanced(root){
    if(root == null)
        return true;

    let lh = height(root.left);
    let rh = height(root.right);

    if(Math.abs(lh - rh)<=1 && isBalanced (root.left) == true && isBalanced(root.right) == true)
        return true;
    return false;
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.left.left = new Node(8);

if(isBalanced(root))
    console.log("Tree is balanced");
else
    console.log("Tree is not balanced")