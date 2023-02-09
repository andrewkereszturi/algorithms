const intersection = (a, b) => {

    let shared = [];
    
    const items = new Set();
    
    for (let item of a) {
      items.add(item);
    }
    
    for(let item of b) {
      if(items.has(item)) {
        shared.push(item)
      }
    }
    return shared;
    
  };

  console.log("Expected: ", [2,6], " Result: ", intersection([4,2,1,6], [3,6,9,2,10])); 
  console.log("Expected: ", [2,4], " Result: ", intersection([2,4,6], [4,2])); 
  console.log("Expected: ", [1,2,4], " Result: ", intersection([4,2,1], [1,2,4,6])); 
  console.log("Expected: ", [], " Result: ", intersection([0,1,2], [10,11])); 

  // Structy Solution

//   const intersection = (a, b) => {
//     const result = [];
//     const setA = new Set(a);
//     for (let item of b) {
//       if (setA.has(item)) {
//         result.push(item);
//       }
//     }
//     return result;
//   };