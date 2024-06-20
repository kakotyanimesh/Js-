

const grid = [
    ['L', 'W', 'W', 'L', 'W'],
    ['L', 'W', 'W', 'L', 'L'],
    ['W', 'L', 'W', 'L', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L']
]



function islandCount(grid){
    const rows = grid.length
    const colums = grid[0].length

    const visited = new Set()
    let count = 0


    function dfs(r, c) {
        const position = r + "," + c // stringifying the position 

        if(
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= colums ||
            grid[r][c] === "W"||
            visited.has(position)
        ){
            return 
        }
        visited.add(position)

        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1)
        
    }
    for (let r = 0; r < rows; r++) {
       for (let c = 0; c < colums; c++) {
        if (grid[r][c] === 'L' && !visited.has(r + ',' + c)) {
            count++
            dfs(r, c)
          }
       }
    }
    return count
}

console.log(islandCount(grid));