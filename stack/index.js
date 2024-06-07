// // stack is like collection of elements that follows a order

// class stack{
//     constructor(){
//         this.stack = []
//     }

//     push(number){
//         this.stack.push(number)
//     }

//     pop(){
//         this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length - 1]
//     }

//     isEmpty(){
//         return this.stack.length ===  0
//     }

//     size(){
//         return this.stack.length
//     }

//     clear(){
//         this.stack = ""
//     }
    
//     contains(element){
//         return this.stack.includes(element)
//     }

//     reverse(){
//         return this.stack.reverse()
//     }

//     printStack(){
//         let str = ""
//         for (let i = 0; i < this.stack.length; i++) {
//             str += this.stack[i]           
//         }
//         return str
//     }


    
// }

// let mystack = new stack()
// mystack.push(2)
// mystack.push(6)
// mystack.push(5)
// mystack.push(4)
// mystack.pop()
// mystack.peek()
// // mystack.clear()
// mystack.reverse()
// mystack.contains(99)
// console.log(mystack.printStack());

class stack{
    constructor(){
        this.stack = []
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        this.stack.pop()
    }

    isEmpty(){
        return this.stack.length === 0
    }

    peek(){
        return this.stack[this.stack.length - 1]
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    contains(element){
        return this.stack.includes(element)
    }

    reverse(){
        return this.stack.reverse()
    }

    printStack(){
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n"            
        }
        return str
    }
}


let myStack = new stack()
myStack.push(44)
myStack.push(44232323)
myStack.push(4423232312121212)
console.log(myStack.printStack());
