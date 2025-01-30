class Node{
    constructor(data){
        this.data = data;
        this.next = null;

    }
}
function isPalindrome(head){
    let currNode = head;
    let stack = [];

    while(currNode !== null){
        stack.push(currNode.data);
        currNode = currNode.next;
    }
    while(head !== null){
        let c = stack.pop();
        if(head.data !== c){
            return false;
        }
        head = head.next;
    }
    return true;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

let result = isPalindrome(head);
if(result)
    console.log("true");
else
    console.log("false");