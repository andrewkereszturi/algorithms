var lastStoneWeight = function(stones) {
    let sorted = stones.sort((a, b) =>  a - b)
    while (sorted.length > 1) {
      sorted = sorted.sort((a, b) => a - b)  
      const a = sorted.pop();
      const b = sorted.pop();
      if (a > b) {
          sorted.push(a-b)
      } else if (b > a) {
          sorted.push(b-a)
      }
    }
    return sorted
  };