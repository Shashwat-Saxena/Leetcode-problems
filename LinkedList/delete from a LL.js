class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
function deletefirstNode(last){
    if(last === null){
        console.log("List is empty");
        return null;
    }
    let head = last.next;
    if(head === last){
        last = null;
    }else{
        last.next = head.next;
    }
    return last;
}
function PrintList(last){
    if(last === null) return;
    let head = last.next;

    while(true){
        console.log(head.data +'');
        head = head.next;

        if(head === last.next)break;
    }
    console.log();
}

let first = new Node(2);
first.next = new Node(3);
first.next.next = new Node(4);

let last = first.next.next;
last.next = first;

console.log("original list:");
PrintList(last);

last = deletefirstNode(last);

console.log("List after deleting firstnode:");
PrintList(last);