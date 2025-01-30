class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function removeduplicates(head){
    const st = new Set();
    let temp = head;
    let newHead = null;
    let tail = null;

    while(temp !== null){
        if(!st.has(temp.data)){
            const newNode = new Node(temp.data);
            if(newHead === null){
                newHead = newNode;
                tail = newHead;
            }else{
                tail.next = newNode;
                tail = newNode;

            }
            st.add(temp.data);
        }
        temp = temp.next;
    }
    return newHead;
}

function PrintList(node){
    let current = node;

    while(current){
        process.stdout.write(current.data + "");
        current = current.next;
    }
    console.log();
}

let head = new Node(11);
head.next = new Node(11);
head.next.next = new Node(11);
head.next.next.next = new Node(13);
head.next.next.next.next = new Node(13);
head.next.next.next.next.next = new Node(20);

console.log("Linked list before duplicates remove:");
PrintList(head);
head = removeduplicates(head);
console.log("Linked List after duplicates remove:");
PrintList(head);