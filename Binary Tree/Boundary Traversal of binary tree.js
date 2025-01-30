class Node{
    constructor(x){
        this.data = x;
        this.left = null;
        this.right = null;
    }
}
function collectLeaves(root, result){
    if(root === null){
        return;
    }
    collectLeaves(root.left, result);

    if(root.left === null && root.right === null){
        result.push(root.data);
    }
    collectLeaves(root.right, result);
}

function collectBoundaryLeft(root, result){
    if(root === null){
        return;
    }
    if(root.left){
        result.push(root.data);
        collectBoundaryLeft(root.left,result)
    }else if(root.data){
        collectBoundaryLeft(root.right,result);
    }
}

function collectBoundaryRight(root, result){
    if(root === null){
        return;
    }
    if(root.right){
        collectBoundaryRight(root.right,result);
        result.push(root.data);
    }else if(root.left){
        collectBoundaryRight(root.left, result);
        result.push(root.data);
    }
}
function getBoundary(root){
    const result = [];
    if(root === null){
        return result;
    }
    result.push(root.data);
    collectBoundaryLeft(root.left,result);
    collectBoundaryRight(root.right,result);

    const rightBoundary = [];
    collectBoundaryRight(root.right, rightBoundary)
    result.push(...rightBoundary)

    return result;
}

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(4);
root.left.right = new Node(12);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right.right = new Node(25);

const boundary = getBoundary(root);
console.log(boundary.join(" "));