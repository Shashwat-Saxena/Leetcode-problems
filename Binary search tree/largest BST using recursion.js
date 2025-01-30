// JavaScript Program to find Size of 
// Largest BST in a Binary Tree
// very Important question

class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// Returns true if the given tree is BST, else false
function isValidBst(root, minValue, maxValue) {
    if (!root) return true;
    if (root.data >= maxValue || root.data <= minValue)
        return false;
    return isValidBst(root.left, minValue, root.data) && 
           isValidBst(root.right, root.data, maxValue);
}

// Returns size of a tree
function size(root) {
    if (!root) return 0;
    return 1 + size(root.left) + size(root.right);
}

// Finds the size of the largest BST
function largestBst(root) {
  
    // If tree is empty
    if (!root) return 0;
    
    // If whole tree is BST
    if (isValidBst(root, -Infinity, Infinity)) 
        return size(root);
  
    // If whole tree is not BST
    return Math.max(largestBst(root.left), largestBst(root.right));
}

// Constructed binary tree looks like this:
//         50
//       /    \
//     75      45
//    /
//  40
let root = new Node(50);
root.left = new Node(75);
root.right = new Node(45);
root.left.left = new Node(40);

console.log(largestBst(root));