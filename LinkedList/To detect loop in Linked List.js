class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}
function detectloop(head){
    let st = new Set();
    while(head !== null){
        if(st.has(head))
            return true;
        st.add(head);
        head = head.next;
    }
    return false;
}
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
head.next.next.next.next = new Node(50);
head.next.next.next.next.next = new Node(60);

head.next.next.next.next = head;
if(detectloop(head))
    console.log("true")
else
    console.log("false")