class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}

function getintersectionNode(head1,head2){
    let ptr1 = head1;
    let ptr2 = head2;

    if(ptr1 === null || ptr2 === null) return null;
    while(ptr1 !== ptr2){
        ptr1 = ptr1 ? ptr1.next : head2;
        ptr2 = ptr2 ? ptr2.next : head1;
    }
    return ptr1;
}

function printList(node){
    let result = "";

    while(node !== null){
        result += ""+ node.data;
        node = node.next;
    }
    console.log(result);
}
let head1 = new Node(10);
head1.next = new Node(15);
head1.next.next = new Node(30);

let head2 = new Node(3);
head2.next = new Node(6);
head2.next.next = new Node(9);
head2.next.next.next = head1.next;

let intersectionPoint = getintersectionNode(head1,head2);

if(intersectionPoint === null)
    console.log("No intersection");
else
   console.log("intersection point:" + intersectionPoint.data);