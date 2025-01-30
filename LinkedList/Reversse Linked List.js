class Node{
    constructor(newData){
        this.data = newData;
        this.next = null;
    }
}

function reverseList(head){
    let curr = head;
    let prev = null;
    let next;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }
    return prev;
}

function PrintList(node){
    while(node !== null){
        console.log(""+ node.data);
        node = node.next;
    }
    console.log();
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("Given Linked List");

PrintList(head);

head = reverseList(head);
console.log("Reverse Linked List:");
PrintList(head);

// iterative way