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