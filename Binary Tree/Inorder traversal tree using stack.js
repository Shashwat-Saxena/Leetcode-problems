class Node{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function inorder(root){
    let ans = [];
    let s = [];
    let curr = root;

    while(curr !== null || s.length>0){
        while(curr !== null){
            s.push(curr);
            curr = curr.left;
        }
        curr = s.pop();
        ans.push(curr.data);
        curr = curr.right;
    }
    return ans;
}
function PrintList(v){
    console.log(v.join(""));
}

 // Constructed binary tree is
//          1
//        /   \
//      2      3
//    /  \
//  4     5

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let res = inorder(root);
PrintList(res);