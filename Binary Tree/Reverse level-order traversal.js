class Node{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
function height(node){
    if(node === null)
        return 0;

    let Lheight = height(node.left);
    let Rheight = height(node.right);
    return Math.max(Lheight,Rheight)+1;
}
function PrintGivenLevel(root, nodelevel, reqlevel){
    if(root === null)
        return;
    if(nodelevel === reqlevel)
        console.log(root.data);
    else if(nodelevel < reqlevel){
        PrintGivenLevel(root.left, nodelevel+1, reqlevel);
        PrintGivenLevel(root.right, nodelevel+1, reqlevel);
    }
}

function reverselevelorder(root){
    let h= height(root);
    for(let i=h; i>=1; i--)
        PrintGivenLevel(root,1,i)
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

reverselevelorder(root);