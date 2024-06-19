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


// graph island 

const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e'],
    h: []
};

function connectedIsland(graph) {
    const visited = new Set()
    let count = 0


    function dfs(node) {
        if (!visited.has(node)) {
            visited.add(node)

            for (const neighbour of graph[node]) {
                dfs(neighbour)
            }
        }
    }


    for (const node in graph) {
        if(!visited.has(node)){
            dfs(node)
            count++
        }
    }
    return count
}

console.log(connectedIsland(graph));

// biggest node

function biggestIsland(graph) {
    const visited = new Set()
    let largest = 0


    function dfs(node){
        if (visited.has(node)) {
            return 0
        }
        visited.add(node)
        let size = 1

        for (const neighbour of graph[node]) {
            size += dfs(neighbour)
        }
        return size
    }

    for (const node in graph) {
        if(!visited.has(node)){
            const componentSize = dfs(node)

            if (componentSize > largest) {
                largest = componentSize
            }
        }
    }
    return largest
}

console.log(biggestIsland(graph));


function connectedIsland(graph) {
    const visited = new Set()
    let count = 0


    function dfs(node) {
        if(!visited.has(node)){
            visited.add(node)

            for (const neighbour of graph[node]) {
                dfs(neighbour)
            }
        }
    }

    for (const node in graph) {
        if(!visited.has(node)){
            dfs(node)
            count++
        }
    }
    return count
}


function biggestIslan(graph) {
    const visited = new Set()
    let largest = 0

    function dfs(node) {
        if(visited.has(node)){
            return 0
        }
        visited.add(node)
        let size = 1

        for (const neighbour of graph[node]) {
            size += dfs(neighbour)
        }
        return size
    }

    for (const node in graph) {
        if(!visited.has(node)){
            const componentSize = dfs(node)
            if (componentSize > largest) {
                largest = componentSize
            }
        }
    }
     return largest
}


function createGraph(edges) {
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge

        if(!(a in graph)){
            graph[a] = []
        }
        if (!(b in graph)) {
            graph[b] = []
        }

        graph[a].push(b)
        graph[b].push(a)
    }
    return graph
}


function shortestPath(edges, start, dest) {
    const graph = createGraph(edges)

    const queue = [[start, 0]]
    const visited = new Set([start])


    while(queue.length > 0){
        const [node, distance] = queue.shift()

        if(node === dest){
            return [node, distance]
            // return distance
        }

        for (const neighbour of graph[node]) {
            if(!visited.has(node)){
                visited.add(neighbour)
                queue.push([neighbour, distance+ 1])
            }
        }
    }
}