class Node{
    constructor(val){
        this.val=val;
        let next=null;
    }
};

const temp =new Node(12);
console.log(temp.val);
temp.next=new Node(13);
let my = temp.next;
console.log(my.val);