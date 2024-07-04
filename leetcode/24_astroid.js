(function asteroidCollision(astroids) {
    let stack = []

    for (let astroid of astroids) {
        let explore = false
        
        while(stack.length > 0 && astroid < 0 && stack[stack.length - 1] > 0){
            const rightAstroid = stack.pop()

            if(Math.abs(astroid) === rightAstroid){
                explore = true
                break
            } else if(Math.abs(astroid) < rightAstroid){
                astroid = 0
                stack.push(rightAstroid)
                break
            }
        }

        if(!explore && astroid !== 0){
            stack.push(astroid)
        }
    }
    console.log(stack); 
})([5,10,-5])