var findDifference = function(nums1, nums2) {
  const set1 = new Set(nums1)
  const set2 = new Set(nums2)
  
  const unique1 = [...set1].filter(x => !set2.has(x))
  const unique2 = [...set2].filter(x => !set1.has(x))

  return [unique1, unique2]
};

console.log(findDifference([1,2,3,3], [1,1,2,2]));
















// wrong one 
// function unique(nums1, nums2) {
    
//     for(let i = 0; i < nums1.length; i++){
//         for(let j = 0; j < nums2.length; j++){
//             if(nums1[i] === nums2[j]){
//                 nums1.splice(i, 1)
//                 nums2.splice(j, 1)
//             }
//         }
//     }
//     return [nums1, nums2]
// }

// console.log(unique([1,2,3], [2,4,6]));


