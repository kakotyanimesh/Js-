// its fucking the Day two of DSA.
// The linked list => another Data Structure which is good for dynamic operations where frequently insertation and deletation or adding happens , adding at beginning or at end or at middle in o(1) i.e constant time in linked List, but for static array is o(n) linear , so LL is good 
// Ll has nodes that are in connection with each other , node has two parts like item (we store data there)  and the pointer thingy that points to the next node in singly linked lIST => 

    // BROWSING HISTORY CAN BE STORED IN LL OR Play list in spotify is stored in Ll etc


// first step is to create the node as its the building Block
// class Node{
//     constructor(data, next = null){
//         this.data = data
//         this.next = next
//     }
// }


// class LinkedList{
//     constructor(){
//         this.head = null
//     }

//     insertAtFirst(data){
//         const newNode = new Node(data, this.head)

//         this.head = newNode
//     }

//     insetAtLast(data) {
//         const newNode = new Node(data, null)

//         if(!this.head){
//             this.head = newNode
//             return
//         }

//         let lastNode = this.head

//         while(lastNode.next !== null){
//             lastNode = lastNode.next
//         }

//         lastNode.next = newNode

//     }

//     insertAfter(prevNode, data){

//         if(!prevNode){
//             console.log('No prev Node exist');
//             return
//         }
        
//         const newNode = new Node(data, prevNode.next)
//         prevNode.next = newNode
//     }

//     deleteFirstNode(){
//         if(!this.head){
//             console.log('ll is empty');
//             return
//         }

//         this.head = this.head.next
//     }

//     deleteLast(){
//         if(!this.head){
//             console.log('LL IS EMPTY');
//             return
//         }

//         if(!this.head.next){
//             this.head = null
//             return
//         }

//         let secondLast = this.head

//         while(secondLast.next.next){
//             secondLast = secondLast.next
//         }
//         secondLast.next = null
//     }

    
// }



