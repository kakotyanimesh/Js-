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