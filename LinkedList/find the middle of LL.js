class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function getLength(head){
    let length = 0;
    while(head){
        length++;
        head = head.next;
    }
    return length;
}
function getMiddle(head){
    const length = getLength(head);
    let mid_index = Math.floor(length/2);
    while(mid_index-- > 0){
        head = head.next;
    }
    return head.data;
}
function main(){
    const head = new Node(10);
    head.next = new Node(20);
    head.next.next = new Node(30);
    head.next.next.next = new Node(40);
    head.next.next.next.next = new Node(50);
    head.next.next.next.next.next = new Node(60);

    console.log(getMiddle(head));
}
main();