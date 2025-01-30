class Node{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
function height(root){
    if(root === null)
        return 0;

    return 1+ Math.max(height(root.left), height(root.right));
}
function diameter(root){
    if(root === null)
        return 0;

    const lheight = height(root.left);
    const rheight = height(root.right);

    const ldiameter = diameter(root.left);
    const rdiameter = diameter(root.right);

    return Math.max(lheight + rheight, ldiameter,rdiameter);
}
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(diameter(root));