class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function detectloop(head){
    let st = new Set();
    let currNode = head;

    while(currNode !== null){
        if(st.has(currNode)){
            return currNode;
        }
        st.add(currNode);

        currNode = currNode.next;
    }
    return null;
}

let head = new Node(10);
head.next = new Node(15);
head.next.next = new Node(4);
head.next.next.next = new Node(20);

head.next.next.next.next = head;

let loopNode = detectloop(head);

if(loopNode){
    console.log(loopNode.data);
}else{
    console.log(-1);
}