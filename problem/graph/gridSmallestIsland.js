const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
]

function smallestIslandCount(grid) {
    const rows = grid.length
    const cols = grid[0].length

    const visited = new Set()
    let smallestIsland = Infinity

    function exploreIsland(r, c) {
        const pos = r + ',' + c

        if( r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'W' ||
            visited.has(pos)

        ) {
            return 0
        }
        visited.add(pos)
        let size = 1

        size += exploreIsland(r+1, c)
        size += exploreIsland(r-1, c)
        size += exploreIsland(r, c+1)
        size += exploreIsland(r, c-1)

        return size
        
    }


    for (let r = 0; r < rows; r++) {
        for(let c = 0; c < cols; c++){
            if(grid[r][c] === 'L' && !visited.has(r + ',' + c)){
                const size = exploreIsland(r, c)
                if(size < smallestIsland){
                    smallestIsland = size
                }
            }
        }        
    }
    return smallestIsland
}

console.log(smallestIslandCount(grid));