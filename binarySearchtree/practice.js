class bstNode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new bstNode(key)

        if(this.root === null){
            this.root = newNode
        }else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            } else{
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = null
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }
}