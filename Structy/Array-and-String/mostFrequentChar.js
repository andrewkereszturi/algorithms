const mostFrequentChar = (s) => {
    let mostFrequent = '';
    let frequency = 0;
    let chars = {};
    let uniqueChars = [];
    
    for (let i = 0; i < s.length; i++) {
      if (!chars[s[i]]) {
        chars[s[i]] = 1;
        uniqueChars.push(s[i]);
      } else {
        chars[s[i]] += 1;
      }
    }
    
    mostFrequent = s.charAt(0)
    frequency = chars[s.charAt(0)]
  
    for (let i = 1; i < uniqueChars.length; i++) {
      if (chars[uniqueChars[i]] > frequency ) {
        mostFrequent = uniqueChars[i];
        frequency = chars[uniqueChars[i]]
      }
    }
  
    return mostFrequent;
};
  
console.log("Expected: e , Result: ", mostFrequentChar('bookeeper')); 
console.log("Expected: d , Result: ", mostFrequentChar('david')); 
console.log("Expected: b , Result: ", mostFrequentChar('abby')); 
console.log("Expected: i , Result: ", mostFrequentChar('mississippi')); 
console.log("Expected: o , Result: ", mostFrequentChar('potato')); 
console.log("Expected: e , Result: ", mostFrequentChar('eleventenniee')); 
console.log("Expected: r , Result: ", mostFrequentChar('riverbed')); 

// Structy Solution

// const mostFrequentChar = (s) => {
//     const count = {};
    
//     for (let char of s) {
//       if (!(char in count)) {
//         count[char] = 0;
//       }
//       count[char] += 1
//     }
    
//     let best = null;
//     for (let char of s) {
//       if (best === null || count[char] > count[best]) {
//         best = char;
//       }
//     }
//     return best;
// };
  