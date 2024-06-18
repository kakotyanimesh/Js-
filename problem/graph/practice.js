// // check path in undirected graph  converter

// function graphCreate(edges){
//     const graph = {}
//     for (const edge of edges) {
//         const [a, b] = edge

//         if(!(a in graph)){
//             graph[a] = []
//         }

//         if(!(b in graph)){
//             graph[b] = []
//         }

//         graph[a].push(b)
//         graph[b].push(a)
//     }
//     return graph
// }

// function hasPathRecursive(graph, start, dest, visited = new Set()){
//     if(start === dest) return true

//     if(!visited.has(start)){
//         return false
//     }
//     visited.add(start)

//     for (const neighbour of graph[start]) {
//         if(hasPathRecursive(graph, neighbour,dest) === true){
//             return true
//         }
//     }
//     return false
// }

// function breadthfirstPath(graph, start, dest) {
//     const queue = [ start ]
//     const visited = new Set()

//     while (queue.length > 0) {
//         const node = queue.shift()

//         if(node === dest) return true

//         if(!visited.has(node)){
//             visited.add(node)

//             for (const neighbour of graph[node]) {
//                 queue.push(neighbour)
//             }
//         }
//     }
//     return false
// }

// function depthfirstPath(graph, start, dest) {
//     const stack = [ start ]
//     const visited = new Set()

//     while(stack.length > 0){
//         const node = stack.pop()

//         if(node === dest) return true

//         if(!visited.has(node)){
//             visited.add(node)

//             for (const neighbour of graph[node]) {
//                 stack.push(neighbour)
//             }
//         }
//     }
//     return false
// }


// /////////////check if node present or node -> traversal 


// // depth 

// function depthFirstTraversalGraph(graph, start) {
//     const stack = [ start ]
//     const visited = new Set()

//     while(stack.length > 0){
//         const node = stack.pop()

//         if(!visited.has(node)){
//             visited.add(node)

//             for (const neighbour of graph[node]) {
//                 if(!visited.has(neighbour)){
//                     stack.push(neighbour)
//                 }
//             }
//         }
//     }
// }


// // recursive

// function recursive(graph, start, visited = new Set()) {
//     if(!visited.has(start)){
//         visited.add(start)
//     }

//     for (const neighbour of graph[start]) {
//         recursive(graph, neighbour, visited)
//     }
    
// }

// // breadth first 

// function breadthfirstTraversal(graph, start) {
//     const queue = [ start ]

//     const visited = new Set()

//     while (queue.length > 0) {
//         const node = queue.shift()

//         for (const neighbour of graph[node]) {
//             if(!visited.has(node)){
//                 visited.add(node)
//                 queue.push(neighbour)
//             }
//         }
//     }
//     return visited
// }



function graphCreate(edges) {
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge

        if(!(a in graph)){
            graph[a] = []
        }
        if(!(b in graph)){
            graph[b] = []
        }
        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}

function hasPathRecursive(graph, start, dest, visited = new Set()) {
    if(start === dest) return true

    if(!visited.has(start)){
        return false
    }
    visited.add(start)

    for (const neighbour of graph[start]) {
        if (hasPathRecursive(graph, neighbour, dest) === true) {
            return true
        }
    }
    return false
    
}

function depthfirstPath(graph, start, dest) {
    const stack = [ start ]
    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()

        if(node === dest) return true

        if(!visited.has(node)){
            visited.add(node)

            for (const neighbour of graph[node]) {
                stack.push(node)
            }
        }
    }
    return false
}


function breadthfirstPath(graph, start){
    const queue = [ start ]
    const visited = new Set()

    while(queue.length > 0){
        const node = queue.shift()

        if(node === dest) return true

        if(!visited.has(node)){
            visited.add(node)

            for (const neighbour of graph[node]) {
                queue.push(neighbour)
            }
        }
    }
    return false
}

// traversal 

function depthFirstTraversalGraph(graph, start) {
    const stack = [start]
    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()
        
        if(!visited.has(node)){
            visited.add(node)

            for (const neighbour of graph[node]) {
                stack.push(neighbour)
            }
        }
    }
    return visited
}

// breadth 

function breadthfirstTraversal(graph, start) {
    const queue = [ start ]
    const visited = new Set()
    
    while(queue.length > 0){
        const node = queue.shift()

        for (const neighbour of graph[node]) {
            if(!visited.has(node)){
                visited.add(node)
                queue.push(neighbour)
            }
        }
    }
    return visited
}


// recursive

function recursiveGraph(graph, start, visited = new Set()) {
    if(!visited.has(start)){
        visited.add(start)
    }

    for (const neighbour of graph[start]) {
        recursiveGraph(graph, neighbour, visited)
    }
}