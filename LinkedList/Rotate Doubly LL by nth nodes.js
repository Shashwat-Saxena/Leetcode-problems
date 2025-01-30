// JavaScript program to rotate a doubly-linked 
// list counter-clockwise by p positions
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// Function to rotate the doubly-linked list
function rotateDLL(head, p) {
    let tail = head;

    // Find the last node
    while (tail.next !== null) {
        tail = tail.next;
    }

    // Make the list circular
    tail.next = head;
    head.prev = tail;

    // Move head and tail by the given position
    let count = 1;
    while (count <= p) {
        head = head.next;
        tail = tail.next;
        count++;
    }

    // Break the circular connection
    tail.next = null;
    head.prev = null;

    return head;
}

function printList(head) {
    let curr = head;
    while (curr) {
        console.log(curr.data);
        if (curr.next) console.log(" ");
        curr = curr.next;
    }
    console.log();
}

let head = new Node(2);
head.next = new Node(6);
head.next.prev = head;
head.next.next = new Node(5);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

let p = 3;
head = rotateDLL(head, p);
printList(head);