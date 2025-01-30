class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
function dfs(node, hd, level, topNodes){
    if(!node)return;

    if(!(hd in topNodes) || topNodes[hd][1] > level){
        topNodes[hd] = [node.data,level];
    }
    dfs(node.left, hd-1, level+1,topNodes);
    dfs(node.right, hd+1, level+1, topNodes);
}
function topview(root){
    let result =[];
    if(!root)return result;

    let topNodes = {};

    dfs(root, 0, 0 , topNodes);

    for(let key of Object.keys(topNodes).sort((a,b)=> a-b)){
        result.push(topNodes[key][0]);
    }
    return result;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root. right.right = new Node(7);
const result =  topview(root);
console.log(result.join(" "))