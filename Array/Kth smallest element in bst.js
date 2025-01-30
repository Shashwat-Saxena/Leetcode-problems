class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// Recursive in-order function to 
// Returns -1 if value is not found.
function kthSmallestRecur(root, cnt, k) {
    if (root === null) return -1;
    
    // Process left subtree.
    let left = kthSmallestRecur(root.left, cnt, k);
    
    // If kth smallest is found in left 
    // subtree, then return it.
    if (left !== -1) return left;
    
    // increment node count
    cnt[0]++;
    
    // If curr node is kth smallest,
    // return it.
    if (cnt[0] === k) return root.data;
    
    // Else process the right subtree
    // and return its value.
    let right = kthSmallestRecur(root.right, cnt, k);
    return right;
}

// Main function which initialises
// count call for recursion.
function kthSmallest(root, k) {
    let cnt = [0];
    return kthSmallestRecur(root, cnt, k);
}

// Binary search tree
//      20
//    /   \
//   8     22
//  / \
// 4   12
//    /  \
//   10   14
const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
const k = 3;

console.log(kthSmallest(root, k));
