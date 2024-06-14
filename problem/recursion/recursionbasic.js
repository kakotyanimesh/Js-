function printNumber(min, max) {
    if(min > max){
        return
    }

    console.log(min);

    min = min + 1
    logic(min, max)
    
}

function logic(min, max) {
    if(min> max) return

    printNumber(min, max)
}

printNumber(1,5)