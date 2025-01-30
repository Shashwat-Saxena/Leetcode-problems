class Node{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function treeHeight(root){
    if(!root)return 0;

    const lheight = treeHeight(root.left);
    const rheight = treeHeight(root.right);

    return Math.max(lheight,rheight)+1;
}
function zigzagTraversalRecursion(root,height,level){
    if(!root)return;
    if(!level[height]){
        level[height] = [];
    }
    level[height].push(root.data);

    zigzagTraversalRecursion(root.left,height+1,level);

    zigzagTraversalRecursion(root.right,height+1,level)
}

function zigzagTraversal(root){
    const height = treeHeight(root);
    const level = [];
    const ans = [];

    zigzagTraversalRecursion(root,0,level);

    for(let i =0; i<height; i++){
        if(i%2 === 0){
            ans.push(...level[i]);
        }else{
            ans.push(...level[i].reverse());
        }
    }
    return ans;
}
function PrintList(v){
    console.log(v.join(" "))
}

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.right.right = new Node(11);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

const ans = zigzagTraversal(root);
PrintList(ans);