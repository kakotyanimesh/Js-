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
        if(node.key === null){
            return null
        }
        if(key < node.key){
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        } else {
            if(node.left == null && node.right == null){
                return null
            } else if (node.left == null) {
                return node.right
            } else if(node.right == null){
                return node.left
            } else {
                // 2 childs

                let tempNode = this.findMin(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node 
    }

    findMin(node){
        while(node.left === null){
            node = node.left
        }
        return node
    }

    // inorder preorder postorder

    // inorder -> left>root>right

    // preorder => root>left>right

    //postorder => left>right>root


    inOrderTraversal(){
        const result = []

        this.inOrder(this.root, result)
        return result
    }

    inOrder(){
        if(node !== null){
            this.inOrder(node.left, result)
            result.push(node.key)        }
            this.inOrder(node.right, result)
    }

    preOrderTraversal(){
        const result = []
        this.preOrder(this.root, result)
        return result
    }

    preOrder(){
        if(node !== null){
            result.push(node.key)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
    }

    postOrderTraversal(){
        const result = []
        this.postOrder(this.root, result)
        return result
    }

    postOrder(){
        this.preOrder(node.left, result)
        this.postOrder(node.right, result)
        result.push(node.key)
    }
}