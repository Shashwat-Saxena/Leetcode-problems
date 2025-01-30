class Node{
    constructor(v){
        this.data = v;
        this.left = null;
        this.right = null;
    }
}
function Printpostorder(node){
    if(node == null){
        return;
    }
    Printpostorder(node.left);
    Printpostorder(node.right);

    console.log(node.data + " ")
}

function main(){
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.right = new Node(6);

    console.log("postorder traversal of binary tree is:");
    Printpostorder(root);
}
main();