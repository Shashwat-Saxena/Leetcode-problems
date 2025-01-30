// JavaScript program to check if linked list is circular
// Class representing a node in the list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Function to check if the linked list is circular
function isCircular(head) {
    // If head is null, list is empty, circular
    if (!head) return true;

    let temp = head;

    // Traverse until the end is reached or
    // the next node equals the head
    while (head && head.next !== temp)
        head = head.next;

    // If end reached before finding head again,
    // list is not circular
    if (!head || !head.next)
        return false;

    // If head found again, list is circular
    return true;
}

// Main part
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Check if the linked list is circular
console.log(isCircular(head) ? "Yes" : "No");

// Making the linked list circular
head.next.next.next.next = head;

// Check again if the linked list is circular
console.log(isCircular(head) ? "Yes" : "No");