// C# implementation to sort a k sorted doubly
// linked list
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
        this.prev = null;
    }
}

// Function to sort a k-sorted doubly linked list
function sortAKSortedDLL(head, k) {
    if (head === null || head.next === null)
        return head;

    let node = head.next;

    while (node !== null) {
        let next = node.next;
        let curr = node;

        while (curr.prev !== null
               && curr.data < curr.prev.data) {

            // Swap curr and curr.prev node
            let node1 = curr.prev.prev;
            let node2 = curr.prev;
            let node3 = curr.next;

            if (node1 !== null)
                node1.next = curr;
            curr.prev = node1;

            node2.next = node3;
            if (node3 !== null)
                node3.prev = node2;

            curr.next = node2;
            node2.prev = curr;
        }

        // If curr is now the new head, then reset head
        if (curr.prev === null)
            head = curr;

        node = next;
    }

    return head;
}

function printList(curr) {
    while (curr !== null) {
        process.stdout.write(curr.data + " ");
        curr = curr.next;
    }
    console.log();
}

// Create the doubly linked list:
// 3 <-> 2 <-> 1 <-> 5
let head = new Node(3);
head.next = new Node(2);
head.next.prev = head;
head.next.next = new Node(1);
head.next.next.prev = head.next;
head.next.next.next = new Node(5);
head.next.next.next.prev = head.next.next;

let k = 2;
head = sortAKSortedDLL(head, k);
printList(head);