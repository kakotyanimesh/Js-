class Node{
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
}

doublyLinkedList.prototype.atfirst = function (data) {
    const newNode = new Node(data, this.head, null)

    if(this.head !== null){
        this.head.prev = newNode
    }
    this.head = newNode
    if(this.tail === null){
        this.tail = newNode
    }
}


doublyLinkedList.prototype.atend = function (data) {
    const newNode = new Node(data, null, this.tail)

    if(this.tail !== null){
        this.tail.next = newNode
    }
    this.tail = newNode
    if(this.head === null){
        this.head = newNode
    }
}

// at given 

doublyLinkedList.prototype.atgiven = function (prevNode, data) {
    if(prevNode == null){
        console.log("invalid prevNode");
        return
    }

    const newNode = new Node(data, prevNode.next, prevNode)

    if(prevNode.next !== null){
        prevNode.next.prev = newNode
    }

    prevNode.next = newNode

    if(newNode === null){
        this.tail = newNode
    }

}


// deleteat first 

doublyLinkedList.prototype.deleteFIRST = function () {
    if(!this.head){
        return // nothing to delete
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    } else {
        this.head = this.head.next
        this.head.prev = null
    }
}


doublyLinkedList.prototype.taildelete = function () {
    if(!this.tail){
        console.log("tail is empty");
        return
    }

    if(this.head === this.tail){
        this.head = null
        this.tail = null
    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}


// reverser

doublyLinkedList.prototype.reverse = function () {
    let current = this.head
    let temp = null

    while(current !== null){
        temp = current.prev
        current.prev = current.next
        current.next = prev
    }

    if(temp !== null){
        this.head = this.tail
        this.head = temp.prev
    }
}