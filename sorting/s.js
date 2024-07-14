// // sorting algos
// // - 5 sorting methods






const a = [8, 2, 4, 7, 1, 3, 9, 6, 5]
// // insertion => 2 loop => i = 0 i++ / j = i - 1 (reverse loop) j -- => arr[j] > current => current value => jth position shift 

// function insertion(array){
//   for(let i = 0; i < array.length; i++){
//     let current = array[i]
//     let j = i - 1

//     while(j >= 0 && array[j] > current){
//       array[j+1] = array[j]
//       j--
//     }
//     array[j+1] = current
//   }
//   return array
// }


// // bubble sort => isSwap => dowhile => arr[i+1] < arr[i] => swap 

// function bubbleSort(array){
//   let isSwap

//   do{
//     isSwap = false
//     for(let i = 0; i < array.length; i++){
//       if(array[i+1] < array[i]){
//         [array[i+1], array[i]] = [array[i], array[i+1]]
//         isSwap = true
//       }
//     }
//   }while(isSwap)
//   return array
// }

// // merge sort => base case array.length = 1 => breaking point and assembling point/ merge sort => breakingPoint => left , right => left < right => push left / ! right // slice middle 

// function mergeSort(array){
//   if(array.length === 1) return array
  
//   const middle = Math.floor(array.length / 2)
//   const left = array.slice(0, middle)
//   const right = array.slice(middle)

//   return merge(mergeSort(left), mergeSort(right))
  
// }


// function merge(left, right){
//   let result = []
//   let leftIndex = 0
//   let rightIndex = 0

//   while(leftIndex < left.length && rightIndex < right.length){
//     if(left[leftIndex] < right[rightIndex]){
//       result.push(left[leftIndex])
//       leftIndex++
//     } else {
//       result.push(right[rightIndex])
//     }
//   }
//   return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
// }


// // selection => store index => we worked on minimum index then swap => 0th index taken 


// function selection(array){
//   const n = array.length

//   for(let i = 0; i < n - 1; i++){
//     let minIndex = i
//     for(let j = i+1; j < n; j++){
//       if(array[j] < array[minIndex]){
//         minIndex = j
//       }
//     }
//     if(minIndex !== i){
//       [array[minIndex], array[i]] = [array[i], array[minIndex]]
//     }
//   }
//   return array
// }


// // quicksort => pivot point find & swaping => partition and recursively => last index 

// function quickSort(array, low = 0, high = array.length - 1){
//   if(low < high){
//     let pivotIndex = partition(array, low, high)

//     quickSort(array, low, pivotIndex -1)
//     quickSort(array, pivotIndex + 1, high)
//   }
//   return array
// }

// function partition(array, low, high){
//   let pivot = array[high]
//   let i = low - 1

//   for(let j = low; j < high; j++){
//     if(array[j] < pivot){
//       i++
//       [array[j], array[i]] = [array[i], array[j]]
//     }
//   }
//   [array[i+1], array[high]] = [array[high], array[i+1]]
//   return i+1
// }

// console.log(quickSort(a))
// console.log(selection(a))
// console.log(mergeSort(a))
// console.log(bubbleSort(a))
// console.log(insertion(a))
// console.log(quickSort(a))


// quicksort


function quickSort(arr, low = 0, high = arr.length - 1) {
  if(low < high){
    const pivotIndex = partition(arr, low, high)

    quickSort(arr, low, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, high)
  }
  return arr
}

function partition(arr, low, high) {
  let pivot = arr[high]
  let i = low - 1

  for (let j = low; j < high; j++) {
    if(arr[j] < pivot){
      i++
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }  
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
    return i + 1
}

console.log(quickSort(a));


function bubbleSort(arr){
  let isSwap
  do {
    isSwap = false
    for (let i = 0; i < arr.length; i++) {
      if(arr[i+1] < arr[i]){
        [arr[i+1], arr[i]] = [arr[i], arr[i+1]]
        isSwap = true
      } 
    }
  } while (isSwap);
  return arr
}


console.log(bubbleSort(a));


function selection(arr) {
  const n = arr.length

  for (let i = 0; i < n -1; i++) {
    let minIndex = i
    for (let j= minIndex + 1; j< n; j++) {
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }    
    }
    if(minIndex !== i){
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
    }
    
  }
  return arr
}

console.log(selection(a));


function mergeSort(arr) {
 if(arr.length === 1) return arr   // base case

 const middle = Math.floor(arr.length / 2)

 const left = arr.slice(0, middle)
 const right = arr.slice(middle)

 return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right){
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex]){
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }
  return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)]
}

console.log(mergeSort(a));


function insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    let j = i - 1

    while(j >= 0 && arr[j] > current){
      arr[j+1] = arr[j]
      j--
    }
    arr[j+1] = current
    return arr
    
  }
}

console.log(insertion(a));