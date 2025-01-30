class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function bootamView(root){
    if(!root)return [];

    const hdMap = new Map();

    const queue = [{node: root, hd:0}];

    while(queue.length>0){
        const {node, hd} = queue.shift();

        hdMap.set(hd,node.data);
        if(node.left){
            queue.push({node: node.left, hd: hd-1});
        }
        if(node.right){
            queue.push({node:node.right, hd: hd+1});
        }
    }
    const result = [];
    [...hdMap.keys()].sort((a,b)=> a-b).forEach(hd =>{
        result.push(hdMap.get(hd));
    })
    return  result;
}

const root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);
root.right.right = new Node(25);

const result = bootamView(root);
console.log(result.join(" "))