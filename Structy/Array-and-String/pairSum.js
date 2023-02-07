const pairSum = (numbers, targetSum) => {
  
    let previous = {}
    
    for (let i = 0; i < numbers.length; i++) {
      
      let compliment = targetSum - numbers[i];
      
      if (compliment in previous) {
        return [previous[compliment], i]
      }
      
      previous[numbers[i]] = i;
    } 
};

console.log("Expected: ", [0,2], " Result: ", pairSum([3, 2, 5, 4, 1], 8)); 
console.log("Expected: ", [0,5], " Result: ", pairSum([4, 7, 9, 2, 5, 1], 5)); 
console.log("Expected: ", [3,5], " Result: ", pairSum([4, 7, 9, 2, 5, 1], 3)); 
console.log("Expected: ", [1,2], " Result: ", pairSum([1, 6, 7, 2], 13)); 
console.log("Expected: ", [0,1], " Result: ", pairSum([9, 9], 18)); 
console.log("Expected: ", [1,3], " Result: ", pairSum([6, 4, 2, 8 ], 12)); 

// Structy Solution 

// const pairSum = (numbers, targetSum) => {
//   const previousNums = {};
//   for (let i = 0; i < numbers.length; i += 1) {
//     const num = numbers[i];
//     const complement = targetSum - num;
//     if (complement in previousNums) return [i, previousNums[complement]];
    
//     previousNums[num] = i;
//   }
// };