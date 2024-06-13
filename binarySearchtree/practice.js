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

    // inseert

    insert(key){
        const newNode = new bstNode(key)

        if(this.root  === null){
            this.root = newNode

        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if(node.right === null){
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){
        if(key < node.key){
            node.left = this.deleteNode(node.left, key)
        } else if(key > node.right){
            node.right = this.deleteNode(node.right, key)
        } else {
            if(node.left === null && node.right === null){
                return null
            } else if(node.left === null){
                return node.right
            } else if(node.right === null){
                return node.left
            } else {
                let tempNode = this.findMin(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    findMin(node) {
        while(node.left !== null){
            node = node.left
        } 
        return node
    }


    // inorder -> left , root , right
    // preorder -> root , left , right
    // post order -> left , right , root

    inorderTraversal(){
        const results = []

        this.inorder(this.root, results)
        return results
    }
    inorder(){
        if(node !== null){
            this.inorder(node.left, results)
            results.push(node.key)
            this.inorder(node.right, results)
        }
    }

    preOrderTraversal(){
        const results = []
         
        this.preOrder(this.root, results)
        return results
    }

    preOrder(){
        if(node !== null){
            results.push(node.key)
            this.preOrder(node.left, results)
            this.preOrder(node.right, results)
        }
    }

    postOrderTraversal(){
        const results = []

        this.postOrder(this.root, results)
        return results
    }

    postOrder(){
        if(node !== null){
            this.postOrder(node.left, results)
            this.postOrder(node.right, results)
            results.push(node.key)
        }
    }


    
    
}

const depthFirstTraversal = (root) => {
    if(root === null){
        return null
    }

    const values = []
    const stack = [root]

    while(stack.length > 0){
        const node = stack.pop()
        values.push(node)

        if(node.right !== null){
            stack.push(node.right)
        }
        if(node.left !== null){
            stack.push(node.left)
        }
    }
    return values
}

const recursiveDepthFirstTraversal = (root) => {
    if(root === null){
        return null // text
    }

    const leftValues = recursiveDepthFirstTraversal(node.left)
    const rightValues = recursiveDepthFirstTraversal(node.right)

    return [root.key, ...leftValues, ...rightValues]
    // [a,v,d,g,h]
    // return [root.key, leftValues, rightValues]
    // [a,[v,d],[g,h]]

}

const breadthFirstTraversal = (root) => {
    if(root === null){
        return 
    }

    const values = []
    const queue = []

    while (queue.length > 0) {
        const node = queue.shift()
        values.push(node.key)

        if(node.right !== null){
            queue.push(node.right)
        }
        if(node.left !== null){
            queue.push(node.left)
        }
    }
    return values  
}