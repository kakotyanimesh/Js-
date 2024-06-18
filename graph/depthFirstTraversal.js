// go in depth -

const graph = {
    a: ['b','c'],
    b: ['a','c', 'd'],
    c: ['a','b','d'],
    d: ['b','c'],
    e: ['f'],
    f: ['e']
}


//// recursive approach

function recursiveDFS(graph, start, visited = new Set()) {
    if(!visited.has(start)){
        visited.add(start)

        for (const neighbour of graph[start]) {
            recursiveDFS(graph, neighbour, visited)
        }
    }
    
}

const visited = new Set()
recursiveDFS(graph, 'a', visited)
console.log(visited);


/// itterative

function itterativedfs(graph, start) {
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