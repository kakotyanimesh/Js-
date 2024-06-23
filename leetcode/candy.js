// candies => array => no of candy of each kiddo
// extraCandy => no of extra candy
// true => maxcandy(...candies) < candy+ extraCandy

function kidsWithCandy(candies, extraCandy) {
    const maxCandy = Math.max(...candies)   // spread operator

    return candies.map(candy => candy + extraCandy >= maxCandy) // the map => returns array => elements -> individually
    
}

console.log(kidsWithCandy([2, 3, 5, 1, 0], 3));