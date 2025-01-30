class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

function removeduplicates(head){
    let curr1 = head;

    while(curr1 != null){
        let curr2 = curr1;

        while(curr2.next != null){
            if(curr2.next = curr1.data){
                curr2.next = curr2.next.next;
            }else{
                curr2 = curr2.next;
            }
        }
        curr1 = curr1.next;
    }
    return head;
}

function PrintList(head){
    let curr = head;
    while( curr != null){
        console.log(curr.data + "");
        curr = curr.next;
    }
    console.log();
}

let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(41);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(21);

head = removeduplicates(head);
PrintList(head);