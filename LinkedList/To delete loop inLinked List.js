class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function PrintList(curr){
    while(curr != null){
        console.log(curr.data + " ");
        curr = curr.next;
    }
}

function removeloop(head){
    let st = new Set();
    let prev = null;

    while(head != null){
        if(st.has(head)){
            prev.next = null;
            return;
        }
        st.add(head);
        prev = head;
        head = head.next;
    }
}

head = new Node(50);
head.next = new Node(20);
head.next.next = new Node(15);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(10);

head.next.next.next.next.next = head.next.next;

removeloop(head);

PrintList(head);