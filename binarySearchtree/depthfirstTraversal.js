// class Node{
//     constructor(key){
//         this.key = key
//         this.left = null
//         this.right = null
//     }
// }


const depthFirstTraversal = (root) => {
    if(root === null){
        return // null or message
    }

    const values =[]
    const stack =[root]

    while(stack.length >0){   // run the loop till we got nothing in stack
        const node = stack.pop()  // current 
        values.push(node.key)   // node-> values


        // first left print ==> right will go in stack first 

        if(node.right !== null){
            stack.push(node.right)
        }

        if(node.left !== null){
            stack.push(node.left)
        }

        return values

    }
}


// recursive method

const recursiveDepthfirstTraversal = (root) => {
    if(root === null){
        return // text null

    }

    const leftValues = recursiveDepthfirstTraversal(root.left)
    const rightValues = recursiveDepthfirstTraversal(root.right)

    return [root.key, ...leftValues, ...rightValues]
    //[a, b, c, d, e, f]

    // return [root.key, leftValues, rightValues]
    // // [a,[b, c, d], [e, f]]
}