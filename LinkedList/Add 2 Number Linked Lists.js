class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}
function reverse(head){
    let prev  = null;
    let curr = head;
    let next;

    while(curr !== null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
function addtwolists(num1,num2){
    let res =null;
    let curr = null;
    let carry = 0;

    num1 = reverse(num1);
    num2 = reverse(num2);

    while(num1 !== null || num2 !== null || carry !== 0){
        let sum = carry;
        if(num1 !== null){
            sum += num1.data;
            num1 = num1.next;
        }
        if(num2 !== null){
            sum += num2.data;
            num2 = num2.next;
        }
        let newNode = new Node(sum%10);
        carry = Math.floor(sum/10);

        if(res === null){
            res = newNode;
            curr = newNode;
        }else{
            curr.next = newNode;
            curr = curr.next;
        }
    }
    return reverse(res);
}

function PrintList(head){
    let curr = head;
    let result = '';
    while(curr !== null){
        result += curr.data + '';
        curr = curr.next;
    }
    console.log(result.trim());
}

let num1 = new Node(1);
num1.next = new Node(2);
num1.next.next = new Node(3);

let num2 = new Node(9);
num2.next = new Node(9);
num2.next.next = new Node(9);

let sum = addtwolists(num1,num2);
PrintList(sum);