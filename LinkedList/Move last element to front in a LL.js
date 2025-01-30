class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

function movetofront(head){
    if(head === null || head.next === null){
        return head;
    }
    let seclast = null;
    let last = head;

    while(last.next !== null){
        seclast = last;
        last = last.next;
    }
    seclast.next = null;
    last.next = head;
    head = last;

    return head;
}
function PrintList(node){
    while(node !== null){
        process.stdout.write(node.data + " ");
        node = node.next;
    }
    console.log();
}
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

console.log("linked list before:");
PrintList(head);

head = movetofront(head);
console.log("Linked List after:");
PrintList(head);