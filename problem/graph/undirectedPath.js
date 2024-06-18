// 

/*

const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

const graph = {
  b: [a],
  a: [b]
}

loop => check if DOES NOT exist, then add key => push both nodes

Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

After that you can find and node path etc.
Take care of cycle via visited technique.

*/

function graphCreate(edges) {
    const graph = {}
    
    for (const edge of edges) {
        //destrucutre

        const [a, b] = edge

        if (!(a in graph)) {
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


// find path or node

function hasPathRecursive(graph, start, dest, visited = new Set()) {
    if(start === dest) return true

    for (const neighbour of graph[start]) {
        if(hasPathRecursive(graph, neighbour, dest) === true){
            return true
        }
    }
    return false
}


// final function

function ffundirected(edges, start, dest) {
    const graph = graphCreate(edges)

    return hasPathRecursive(graph, start, dest)
}