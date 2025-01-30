class Node{
    constructor(x){
        this.key = x;
        this.left = null;
        this.right = null;
    }
}

function diagonalRecur(root, level, levelData){
    if(root === null)
        return;

    if(!levelData[level]){
        levelData[level] = [];
    }
    levelData[level].push(root.key);
    diagonalRecur(root.left, level+1, levelData);
    diagonalRecur(root.right, level, levelData);
}

function diagonal(root){
    let ans = [];

    let levelData = {};
    diagonalRecur(root, 0, levelData);

    let level =0;
    while(level in levelData){
        ans = ans.concat(levelData[level]);
        level++;
    }
    return ans;
}

function PrintList(v){
    console.log(v.join(" "))
}

let root = new Node(8);
root.left =new Node(3);
root.right = new Node(10);
root.left.left = new Node(1);
root.right.left = new Node(6);
root.right.right = new Node(14);
root.right.right.left = new Node(13);
root.right.left.left = new Node(4);
root.right.left.right = new Node(7);

let ans = diagonal(root);
PrintList(ans);