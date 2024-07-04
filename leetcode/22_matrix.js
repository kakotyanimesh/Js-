// // let grid = [[3,2,1],[1,7,6],[2,7,7]]



function equalPairs(grid){
    const n = grid.length
    const rowMap = new Map()

    for(let  i  = 0; i < n; i++){
        const rowStr = grid[i].join(",")

        rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1)
    }

    let count = 0

    

    for(let i = 0; i < n; i++){
        let colsArray =  []
        for(let j =  0; j < n; j++){
            colsArray.push(grid[j][i])
        }
        
        const colsStr = colsArray.join(',')

        if (rowMap.has(colsStr)) {
            count += rowMap.get(colsStr)
        }
    }
    return count
}

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]));