class Node{
    constructor(x){
        this.data = x;
        this.left = this.right = null;
    }
}

function sum(root){
    if(root == null)
        return 0;

    return sum(root.left)+ root.data+ sum(root.right);
}

function issumtree(root){
    if(root == null || (root.left == null && root.right==null))
        return true;

    let ls = sum(root.left);
    let rs = sum(root.right);

    return root.data == ls + rs && issumtree(root.left) && issumtree(root.right);
}

let root = new Node(26);
root.left = new Node(10);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(3);

if(issumtree(root)){
    console.log("true")
}else{
    console.log("false")
}