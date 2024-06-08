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

// insert at head

linkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data)
    this.head = newNode
}


// insert at end

linkedList.prototype.insertAtEnd = function (data){
    const newNode = new Node(data)

    if(!this.head){
        this.head = newNode
    }

    let current = this.head
    while(current.next){
        current = current.next
    }

    current.next = newNode
}


// insert at any point 

linkedList.prototype.atanyPoint = function (prevNode, data) {
    if(!prevNode){
        console.log("give me previous node ");
        return 
    }
    
    const newNode = new Node(data, prevNode.next)

    prevNode.next = newNode
}


// delete at head

linkedList.prototype.dele = function () {
    if(!this.head){
        return
    }
    this.head = this.head.next
}

// at end 

linkedList.prototype.atend = function () {
    if(!this.head){
        return
    }
    if(!this.head.next){
        this.head = null
    }

    let secondLast  = this.head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null
}

// delete by key 

linkedList.prototype.deleteByKey = function (key) {
    if(!this.head){
        return
    }

    if(this.head.data === key){
        this.head = this.head.next
    }

    let current = this.head
    while(current.next.next =! null){
        if(current.next.data === key){
            current.next = current.next.next
            return
        }
        current = current.next
    }
}