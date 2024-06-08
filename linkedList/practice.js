// class Node{
//     constructor(data, next = null){
//         this.data = data
//         this.next = next
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//     }
// }

// // insert at head

// linkedList.prototype.insertAtBeginning = function (data) {
//     const newNode = new Node(data)
//     this.head = newNode
// }


// // insert at end

// linkedList.prototype.insertAtEnd = function (data){
//     const newNode = new Node(data)

//     if(!this.head){
//         this.head = newNode
//     }

//     let current = this.head
//     while(current.next){
//         current = current.next
//     }

//     current.next = newNode
// }


// // insert at any point 

// linkedList.prototype.atanyPoint = function (prevNode, data) {
//     if(!prevNode){
//         console.log("give me previous node ");
//         return 
//     }
    
//     const newNode = new Node(data, prevNode.next)

//     prevNode.next = newNode
// }


// // delete at head

// linkedList.prototype.dele = function () {
//     if(!this.head){
//         return
//     }
//     this.head = this.head.next
// }

// // at end 

// linkedList.prototype.atend = function () {
//     if(!this.head){
//         return
//     }
//     if(!this.head.next){
//         this.head = null
//     }

//     let secondLast  = this.head
//     while(secondLast.next.next){
//         secondLast = secondLast.next
//     }

//     secondLast.next = null
// }

// // delete by key 

// linkedList.prototype.atany = function(key){
//     if(!this.head){
//         return
//     }

//     if(this.head.data === key){
//         this.head = this.head.next
//         return
//     }

//     let current = this.head
//     while(current.next.next != null){
//         if(current.next.data === key){
//             current.next = current.next.next
//         }
//         current = current.next
//     }
    
// }

// linkedList.prototype.search = function (key) {
//     let current = this.head

//     while(current){
//         if(current.data === key){
//             return true
//         }
        
//     }
//     return false
    
// }

// linkedList.prototype.printList = function () {
//     let current = this.head

//     let listValues = []
//     while(current){
//         listValues.push(current.data)
//         current = current.next
//     }

//     console.log(listValues.join(" ->"));
// }


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

// inserting

linkedList.prototype.nsertatfirst = function(data){
    const newNode = new Node(data)
    this.head = newNode
}

//at end

linkedList.prototype.atend = function (data){
    const newNode = new Node(data)
    if(!this.head){
        this.head = newNode
    }

    let Last = this.head
    while(Last.next){
        Last = Last.next
    }
    Last.next = newNode
}


//at anypoint

linkedList.prototype.atanyPoint = function (prevNode, data) {
    if(!prevNode){
        console.log("give me prev node");
        return
    }

    const newNode = new Node(data. prevNode.next)
    prevNode.next = newNode
}

// delete 

linkedList.prototype.deleteatfirst = function () {
    if(!this.head){
        return
    }
    this.head = this.head.next
}


// at end delete

linkedList.prototype.deleteAtEnd = function () {
    if(!this.head){
        return
    }

    if(!this.head.next){
        this.head = null
        return
    }

    let secondLast = this.head
    while(secondLast.next.next){
        secondLast = secondLast.next
    }

    secondLast.next = null
}

// key delete

linkedList.prototype.deleteByKey = function (key) {
    if(!this.head){
        console.log("list is empty");
        return
    }

    if(this.head.data === key){
        this.head = this.head.next
        return
    }

    let current = this.head
    while(current.next !== null){
        if(current.next.datd === key){
            current.next = current.next.next
            return
        }
        current = current.next
    }
}


//serach 

linkedList.prototype.search = function (key) {
    
    let current = this.head
    while(current){
        if(current.data === key){
            return true
        }

    }
    return false
}

// 
linkedList.prototype.printList = function (){
    let current = this.head

    let listValues = []

    while(current){
        listValues.push(current.data)
        current = current.next
    }

    console.log(listValues.join("->"));
}