// Javascript program to add one to a linked list

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Recursively add 1 from end to beginning and return
// carry after all nodes are processed.
function addWithCarry(head) {
    
    // If linked list is empty, return carry
    if (head === null) {
        return 1;
    }

    // Add carry returned by the next node call
    const res = head.data + addWithCarry(head.next);

    // Update data and return new carry
    head.data = res % 10;
    return Math.floor(res / 10);
}

function addOne(head) {
    
    // Add 1 to linked list from end to beginning
    const carry = addWithCarry(head);

    // If there is carry after updating all nodes,
    // then we need to add a new node to the linked list
    if (carry > 0) {
        const newNode = new Node(carry);
        newNode.next = head;

        // New node becomes head now
        return newNode;
    }

    return head;
}

function printList(head) {
    let curr = head;
    while (curr !== null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
    console.log();
}

// Create a hard-coded linked list:
// 1 -> 9 -> 9 -> 9
let head = new Node(1);
head.next = new Node(9);
head.next.next = new Node(9);
head.next.next.next = new Node(9);

head = addOne(head);

printList(head);