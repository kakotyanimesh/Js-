// class Queue{
//     constructor(){
//         this.queue = []
//     }

//     enqueue(data){
//         this.queue.push(data)
//     }

//     dequeu(){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
//         if (this.isEmpty()) {
//             return "queue is empty"
//         }
//         return this.queue.shift()
//     }

//     isEmpty(){
//         return this.queue.length === 0
//     }

//     peek(){
//         if (this.isEmpty()) {
//             return "queue is empty"
//         }
//         return this.queue[0]
//     }

//     size(){
//         return this.queue.length
//     }

//     clear(){
//         this.queue = []
//     }

//     printqueu(){
//         let str = ""
//         for(let i = 0; i < this.queue.length; i++){
//             str += this.queue[i] + "\n"
//         }
        
//         return str
//     }
// }


// // usage

// let myQueue = new Queue()
// myQueue.enqueue(30)
// myQueue.enqueue(35)
// myQueue.enqueue(25)
// myQueue.enqueue(299)
// console.log(myQueue.printqueu());
// myQueue.dequeu()
// console.log(myQueue.printqueu());



class queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    peek(){
        if (this.isEmpty()) {
            return "queue is empty"
        }
        return this.queue[0]
    }

    clear(){
        this.queue = []
    }

    size(){
        return this.queue.length
    }

    printQueue(){
        let str = ""
        for(let i = 0; i < this.queue.length; i++){
            str += this.queue[i] + "\n"
        }
        return str
        
    }
}


let myQueue = new queue()
myQueue.enqueue(3434)
myQueue.enqueue(3434232323)
myQueue.enqueue(343423232312121212)
console.log(myQueue.printQueue());
myQueue.dequeue()
console.log(myQueue.printQueue());