const pairProduct = (numbers, targetProduct) => {
    let previous = {};
    
    for (let i = 0; i < numbers.length; i++) {
      let compliment = targetProduct / numbers[i];
      if (compliment in previous) {
        return [i, previous[compliment]];
      }
      previous[numbers[i]] = i;
    }
};
  
console.log("Expected: ", [1,3], " Result: ", pairProduct([3, 2, 5, 4, 1], 8)); 
console.log("Expected: ", [1,2], " Result: ", pairProduct([3, 2, 5, 4, 1], 10)); 
console.log("Expected: ", [4,5], " Result: ", pairProduct([4, 7, 9, 2, 5, 1], 5)); 
console.log("Expected: ", [1,4], " Result: ", pairProduct([4, 7, 9, 2, 5, 1], 35)); 
console.log("Expected: ", [1,2], " Result: ", pairProduct([3, 2, 5, 4, 1], 10)); 
console.log("Expected: ", [2,3], " Result: ", pairProduct([4, 6, 8, 2], 16)); 

// Structy Solution 

// const pairProduct = (numbers, targetProduct) => {
//     const previousNums = {};
//     for (let i = 0; i < numbers.length; i += 1) {
//       const num = numbers[i];
//       const complement = targetProduct / num;
      
//       if (complement in previousNums) return [ previousNums[complement], i ];
      
//       previousNums[num] = i;
//     }
// };