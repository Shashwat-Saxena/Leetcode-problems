class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function PrintList(curr){
    while(curr){
        console.log(curr.data +"")
        curr = curr.next;
    }
    console.log();
}
function getTail(cur){
    while(cur && cur.next){
        cur = cur.next;
    }
    return cur;
}

function partition(head,tail){
    let pivot = head;
    let pre = head;
    let curr = head;

    while(curr !== tail.next){
        if(curr.data < pivot.data){
            [curr.data, pre.next.data] = [pre.next.data, curr.data];
            pre = pre.next;
        }
        curr = curr.next;
    }
    [pivot.data,pre.data] = [pre.data,pivot.data];
    return pre;
}
function quicksorthelper(head,tail){
    if(!head || head === tail){
        return;
    }
    let pivot = partition(head,tail);
    quicksorthelper(head,pivot);
    quicksorthelper(pivot.next,tail)
}
function quicksort(head){
    let tail = getTail(head);
    quicksorthelper(head,tail);
    return head;
}
let head = new Node(30);
head.next = new Node(3);
head.next.next = new Node(4);
head.next.next.next = new Node(20);
head.next.next.next.next = new Node(5);

head = quicksort(head);
PrintList(head);