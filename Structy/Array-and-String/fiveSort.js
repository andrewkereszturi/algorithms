const fiveSort = (nums) => {
    let i = 0; 
    let j = nums.length - 1;
    
    while (i <= j) {
      if (nums[j] === 5) {
        j--;
      } else if (nums[i] === 5) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        i++
      } else {
        i++
      }
    }
    return nums;    
};

console.log("Expected: ", [12, 7, 1, 12, 5, 5], " Result: ", fiveSort([12, 5, 1, 5, 12, 7])); 
console.log("Expected: ", [2, 2, 10, 6, 1, 5, 5, 5, 5, 5], " Result: ", fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5])); 
console.log("Expected: ", [4, 1, 1, 1, 5, 5, 5], " Result: ", fiveSort([5, 5, 5, 1, 1, 1, 4])); 
console.log("Expected: ", [6, 5, 5, 5, 5, 5, 5], " Result: ", fiveSort([5, 5, 6, 5, 5, 5, 5])); 
console.log("Expected: ", [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5], " Result: ", fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5])); 

// Structy Solution

// const fiveSort = (nums) => {
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//       if (nums[j] === 5) {
//         j -= 1;
//       } else if (nums[i] === 5) {
//         [ nums[i], nums[j] ] = [ nums[j], nums[i] ];
//         i += 1;
//       } else {
//         i += 1;
//       }
//     }
  
//     return nums;
// };