class node{
    constructor(){
        this.val = 0;
        this.left = this.right = null;
    }
}
function createNode(val)
{
    let newNode = new node();
    newNode.val = val;
    newNode.left = null;
    newNode.right = null;
    return newNode;
}

function inorder(root){
    if(root == null)
        return;
    inorder(root.left);
    console.log(root.val + "");
    inorder(root.right);
}

function mirrorify(root){
    if(root == null){
        return null;
    }
    let mirror = createNode(root.val);
    mirror.right = mirrorify(root.left);
    mirror.left = mirrorify(root.right);

    return mirror;
}

let tree = createNode(5);
tree.left = createNode(3);
tree.right = createNode(6);
tree.left.left = createNode(2);
tree.left.right = createNode(4);

console.log("inder of original tree");
inorder(tree);
let mirror = null;
mirror = mirrorify(tree);
console.log("inorder of mirror tree");
inorder(mirror);