// // Stack Theory => Data structure, ways to store data like array but with some certain rules like last in first out , here we use class to create it why class because in js class is like buleprint to create objects that has same properties 

class Stack{
    constructor(){
        this.stack = []
    }

    push(e) {
        this.stack.push(e)
    }

    pop(){
        this.stack.pop()
    }

    // whose is on the top

    topElement(){
        return this.stack[this.stack.length - 1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size(){
        return this.stack.length
    }

    clear(){
        this.stack = []
    }

    // use includes method 
    isItPresent(e){
        return this.stack.includes(e)
    }

    // reverse the stack
    reverse(){
        this.stack.reverse()
    }

    // print the stack

    print(){
        let str = ''
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i]  
        }
        return str
    }

    //  we can also use the join built in method in js => joint, a function that can take away the elements from an array and make them string with a seperation => syntax array.join(" ") => things inside the (" ") the seperation thingy, default seperation is coma  
    
    printWithJoin(){
        return this.stack.join(',')
    }

}

const myStack = new Stack()


myStack.push(4)
console.log(myStack);
console.log(myStack.isEmpty());

console.log(myStack.topElement());
myStack.push(4)
myStack.push(6)
myStack.push(7)
console.log(myStack);
myStack.reverse()
console.log(`reverse the stack`);

console.log(myStack);
console.log(myStack.isItPresent(7));
myStack.pop()
console.log(myStack.isItPresent(7));
console.log(myStack.print());
console.log(myStack.printWithJoin()); // 7, 6, 4




console.log(myStack.size());
console.log(myStack.isEmpty());
myStack.clear()
console.log(myStack.isItPresent(5));

console.log(myStack.isEmpty());
console.log(myStack.size());


myStack.pop()
console.log(myStack.isEmpty());


console.log(myStack);


// class newStack{
//     constructor(){
//         this.stack = []
//     }

//     push(e){
//         this.stack.push(e)
//     }

//     pop(){
//         this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length - 1]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     size(){
//         return this.stack.length
//     }

//     includes(e){
//         return this.stack.includes(e)
//     }

//     clear(){
//         this.stack = []
//     }

//     reverse(){
//         this.stack.reverse()
//     }


//     // print(){
//     //     let str = ''
//     //     for (let i = 0; i < this.stack.length; i++) {
//     //         str += this.stack[i]            
//     //     }
//     //     return str
//     // }
//     print(){
//         return this.stack.join(' ')
//     }
// }


// const myStack = new newStack()
// myStack.push(4)
// myStack.push(5)
// console.log(myStack.peek());

// myStack.push(7)
// console.log(myStack.print());

