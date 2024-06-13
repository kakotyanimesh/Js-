class BstNODE{
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
        const newNODE = new BstNODE(key)

        if(this.root === null){
            this.root = newNODE
             
        } else {
            this.insertNode(this.root, newNODE)
        }
    }

    insertNode(node, newNODE){
        if(newNODE.key < node.key){
            if(node.left === null){
                node.left = newNODE
            } else {
                this.insertNode(node.left, newNODE)
            }
        } else {
            if(node.right === null){
                node.right  = newNODE
            } else {
                this.insertNode(node.left, newNODE)
            }
        }
    }


    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){
        if(node.key === null){
            return null;

        }

        if(key < node.key){
            node.left = this.deleteNode(node.left, key)
        } else if(key > node.key){
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

    findMin(node){
        while(node.left !== null){
            node = node.left
        }
        return node
    }
}