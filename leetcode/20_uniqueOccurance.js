function unique(arr) {
    const mapCount = new Map
    
    for (const nums of arr) {
        mapCount.set(nums, (mapCount.get(nums) || 0) + 1)
    }

    const countSet = new Set()

    for (const count of mapCount.values()) {
        if(countSet.has(count)) return false

        countSet.add(count)
    }
    return true
}

console.log(unique([1,1,1,2, 2,2, 0]));