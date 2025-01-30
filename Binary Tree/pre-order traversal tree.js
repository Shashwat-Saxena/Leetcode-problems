class Node
{
    constructor(item) 
    {
        this.left = null;
        this.right = null;
        this.data = item;
    }
}

let root;

// Iterative function to do Preorder
// traversal of the tree
function preorderiterative(node)
{
    if (node == null)
    {
        return;
    }

    let st = [];

    // Start from root node (set curr
    // node to root node)
    let curr = node;

    // Run till stack is not empty or
    // current is not NULL
    while (curr != null || st.length > 0)
    {
        
        // Print left children while exist
        // and keep pushing right into the 
        // stack.
        while (curr != null)
        {
            console.log(curr.data + " ");

            if (curr.right != null)
                st.push(curr.right);

            curr = curr.left;
        }

        // We reach when curr is NULL, so We
        // take out a right child from stack
        if (st.length > 0)
        {
            curr = st.pop();
        }
    }
}

function preorderIterative()
{
    preorderiterative(root);
}

// Driver code
root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.left.left = new Node(70);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.left.left.right = new Node(80);
 
preorderIterative();

// This code is contributed by decode2207