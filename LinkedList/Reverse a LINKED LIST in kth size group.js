class Node{
    constructor(x){
        this.data = x;
        this.next = null;

    }
}

function reversekNodes(head,k){
    let curr = head;
    let prev = null;
    let next = null;
    let count = 0;

    while(curr !== null && count < k){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count ++;
    }
    return prev;
}
function reversekgroup(head,k){
    if(head === null){
        return head;
    }
    let temp = head;
    let count = 0;

    while(temp !==null && count <k){
        temp = temp.next;
        count++;
    }
    let groupHead = reversekNodes(head,k);
    head.next = reversekgroup(temp,k);
    return groupHead;
}

function PrintList(head){
    let curr = head;

    while(curr !== null){
        console.log(curr.data + "");
        curr = curr.next;
    }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

head = reversekNodes(head , 6);
PrintList(head);