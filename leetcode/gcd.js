

// function BASICSgcd() {
//     let a = "ABCABCABC"
//     let b = "ABCABC"

//     let result = a.slice(0, a.length % b.length)
//     console.log((a.length % b.length));
//     console.log(result);
// }

// BASICSgcd()





function gcdOfString(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    function gcd(a, b) {
        if(b.length === 0){
            return a
        }

        return gcd(b, a.slice(0, a.length % b.length))
    }

    return gcd(str1, str2)
}

console.log(gcdOfString("ABCABCABC", "ABCABC"));