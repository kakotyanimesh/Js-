const edges = [
    ['a', 'b'],
    ['a', 'c'],
    ['b', 'd'],
    ['c', 'd'],
    ['d', 'e']
  ];


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


function shortestPath(edges, start, dest) {
    const graph = graphCreate(edges)

    const queue = [[start, 0]]
    const visited = new Set([start])
    
    while (queue.length > 0) {
        const [node, distance] = queue.shift()

        if(node === dest){
            return [node, distance]
            // return distance

        }
        
        //process the child

        for (const neighbour of graph[node]) {
            if(!visited.has(neighbour)){
                visited.add(neighbour)
                queue.push([neighbour, distance + 1 ])
            }
        }
    }

    return -1 // if nothing found
    
}



  console.log(shortestPath(edges, "a", "e"));
  