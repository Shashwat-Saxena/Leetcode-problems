class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function height(root){
    if(root === null){
        return 0;
    }
    let queue = [root];
    let height = 0;

    while(queue.length > 0){
        let levelsize = queue.length;
        for(let i=0; i<levelsize; i++){
            let curr = queue.shift();
            if(curr.right){
                queue.push(curr.right);
            }
        }
        height++;
    }
    return height -1;
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(height(root));