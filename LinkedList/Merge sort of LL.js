class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}
function split(head){
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        fast = fast.next.next;
        if(fast){
            slow = slow.next;
        }
    }

    let second = slow.next;
    slow.next = null;
    return second;
}

function merge(first,second){
    if(!first)
        return second;
    if(!second)
        return first;
    if(first.data < second.data){
        first.next = merge(first.next,second);
        return first;
    }else{
        second.next = merge(first,second.next);
        return second;
    }
}

function mergesort(head){
    if(!head || !head.next)
        return head;

    let second = split(head);
    head = mergesort(head);
    second = mergesort(second);
    return merge(head,second);
}

function PrintList(head){
    let curr = head;
    while(curr){
        console.log(curr.data + "");
        curr = curr.next;
    }
    console.log();
}

let head = new Node(9);
head.next = new Node(8);
head.next.next = new Node(5);
head.next.next.next = new Node(2);

head = mergesort(head);
PrintList(head);