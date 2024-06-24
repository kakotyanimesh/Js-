function canPlot(flowerbed, n) {
    let count = 0

    for (let i = 0; i < flowerbed.length; i++) {
        if(flowerbed[i] ===0){
            let isleftEmpty = (i === 0 || flowerbed[i-1] === 0 )
            let isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i+1] === 0)

            if(isRightEmpty && isleftEmpty){
                flowerbed[i] = n
                count++
                if(count >= n){
                    return true
                }
            }
            
        }
        
    }
    return count >= n
    
}

console.log(canPlot([0, 0, 0, 0, 0, 0, 0], 4));