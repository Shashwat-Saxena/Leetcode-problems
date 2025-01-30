class Node{
    constructor(x){
        this.data = x;
        this.next = null;
    }
}
function findIntersection(a,b){
    if(a === null || b === null){
        return null;
    }
    if(a.data < b.data){
        return findIntersection(a.next,b);
    }else if(a.data > b.data){
        return findIntersection(a,b.next);
    }else{
        let temp = new Node(a.data);
        temp.next = findIntersection(a.next,b.next);
        return temp;
    }
}

let head1 = new Node(1);
head1.next = new Node(2);
head1.next.next = new Node(3);
head1.next.next.next = new Node(4);
head1.next.next.next.next = new Node(5);

let head2 = new Node(2);
head2.next= new Node(4);
head2.next.next = new Node(6);
head2.next.next.next = new Node(8);

let result = findIntersection(head1,head2);
while(result !== null){
    console.log(result.data, end="");
    result = result.next;
}
console.log();