class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class linkedList{
    constructor(){
        this.head = null
    }
}

linkedList.prototype.insertAtBeginning = function (data){
    const newNode = new Node(data)
    this.head = newNode;
}

linkedList.prototype.insertAtEnd = function (data){
    const newNode = new Node(data)
    if (!this.head) {
        this.head = newNode
        return
    }

    let last = this.head
    while(last.next){
        last = last.next
    }

    last.next = newNode
}


linkedList.prototype.insertAfter = function (prevNode, data) {
    if(!prevNode){
        console.log("prev node cant be empty");
    }

    const newNode = new Node(data, prevNode)
    prevNode.next = newNode
}


// delete first node 

linkedList.prototype.firstNodeDelete = function () {
    if(!this.head){
        return 
    }
    this.head = this.head.next
}


// delete last node 

linkedList.prototype.lastNodeDelete = function (){
    if (!this.head) {
        return      // nothing to delete
    }

    if(!this.head.next){
        this.head = null  // there is a value for this.head.next i.e there is only one node 
        return
    }

    let secondLast = head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null

}


linkedList.prototype.deleteByKey = function (key){
    
    // head is empty
    if(!this.head){
        return
    }

    // h
    if(this.head.data === key){
        this.head = this.head.next
        return 
    }

    let current = this.head
    while(current.next !== null){
        if(current.next.data === key){
            current.next = current.next.next
            return 
        }
        current = current.next
    }
}