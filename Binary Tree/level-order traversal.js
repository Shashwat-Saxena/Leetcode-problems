class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}
function PrintLevelOrder(root){
    var h = height(root);

    var i;
    for(i = 1; i<=h; i++)
        Printcurrentlevel(root,i);
}

function Printcurrentlevel(root,level){
    if(root == null)
        return;

    if(level == 1)
        console.log(root.data+"");
    else if(level > 1){
        Printcurrentlevel(root.left, level-1);
        Printcurrentlevel(root.right, level-1);
    }
}

function height(root){
    if(root == null){
        return 0;
    }else{
        var Lheight = height(root.left);
        var Rheight = height(root.right);

        if(Lheight > Rheight)
            return (Lheight +1);
        else
          return(Rheight+1);

    }
        
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

PrintLevelOrder(root);