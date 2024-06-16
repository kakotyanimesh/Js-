// implement length 


function implementLength(string) {
   
    
    if(string === ""){
        return 0
    }


    return 1 + implementLength(string.substring(1))
}

console.log(implementLength("ANIMESH"));