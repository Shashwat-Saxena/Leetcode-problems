class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

// Recursive function to reverse a doubly linked list
function reverse(curr) {
    // Base case: if the list is empty or we reach the end of the list
    if (curr === null) {
        return null;
    }

    // Swap the next and prev pointers
    const temp = curr.prev;
    curr.prev = curr.next;
    curr.next = temp;

    // If the previous node (after swap) is null, this is the new head
    if (curr.prev === null) {
        return curr;
    }

    // Recurse for the next node
    return reverse(curr.prev);
}

// Function to print the linked list
function printList(node) {
    let output = '';
    while (node !== null) {
        output += node.data + ' ';
        node = node.next;
    }
    console.log(output.trim());
}


const head = new Node(1);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(3);
head.next.next.prev = head.next;
head.next.next.next = new Node(4);
head.next.next.next.prev = head.next.next;

console.log("Original Linked list:");
printList(head);

const reversedHead = reverse(head);

console.log("\nReversed Linked list:");
printList(reversedHead);