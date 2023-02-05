const anagrams = (s1, s2) => {
    let arr1 = [];
    let arr2 = [];
    let string1 = '';
    let string2 = '';
  
    for (let i = 0; i < s1.length; i++) {
      arr1.push(s1[i]);
    }
    for (let i = 0; i < s2.length; i++) {
      arr2.push(s2[i]);
    }
    
    arr1 = arr1.sort()
    arr2 = arr2.sort()
    
    for (let i = 0; i < s1.length; i++) {
     string1 = string1.concat(arr1.pop());
    }
    for (let i = 0; i < s2.length; i++) {
     string2 = string2.concat(arr2.pop());
    }
  
    if (string1 === string2) {
      return true;
    }
    return false;
  };

  console.log("Expected: true , Result: ", anagrams('restful', 'fluster')); 
  console.log("Expected: false , Result: ", anagrams('cats', 'tocs')); 
  console.log("Expected: true , Result: ", anagrams('monkeyswrite', 'newyorktimes')); 
  console.log("Expected: false , Result: ", anagrams('paper', 'reapa')); 
  console.log("Expected: true , Result: ", anagrams('elbow', 'below')); 

//   Structy Solution

//   const anagrams = (s1, s2) => {
//     const count = {};
//     for (let char of s1) {
//       if (!(char in count)) {
//         count[char] = 0;
//       }
//       count[char] += 1;
//     }
    
//     for (let char of s2) {
//       if (count[char] === undefined) {
//         return false;
//       } else {
//         count[char] -= 1;
//       }
//     }
    
//     for (let char in count) {
//       if (count[char] !== 0) {
//         return false;
//       }
//     }
    
//     return true;
//   };