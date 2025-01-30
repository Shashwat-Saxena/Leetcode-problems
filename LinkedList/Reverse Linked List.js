class Node{
    constructor(new_data){
        this.data = new_data;
        this.next = null;
    }
}
function reverseList(head){
    if(head === null || head.next === null)
        return head;
    let rest = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return rest;
}

function PrintList(node){
    while(node !== null){
        console.log(`${node.data}`);
        node = node.next;
    }
    console.log();
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
console.log("Given Linked List:");
PrintList(head);

head = reverseList(head);
console.log("Reverse Linked List");
PrintList(head);

// recursive way 