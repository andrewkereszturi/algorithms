const compress = (s) => {

    let compressed = '';
    let num = 0;
    let letter = '';
    
    for (let i = 0; i < s.length; i++) {
      letter = s[i];
      num++;
      
      if (s[i+1] !== letter) {
        for (let j = 0; j < num; j++) {
          if (num === 1) {
            compressed = compressed.concat(letter)
          } else {
            num = num.toString();
            compressed = compressed.concat(num, letter)
          }
          num = '';
          letter = '';
        }
      } 
    }
    return compressed;
};

console.log('Expected: 2c3a1t3s \nResult:  ', compress("ccaaatsss"));

// Structy Solution
// const compress = (s) => {
//     let result = [];
//     let i = 0;
//     let j = 0;
    
//     while (j <= s.length) {
//       if (s[i] === s[j]) {
//         j += 1;
//       } else {
//         const num = j - i;
//         if (num === 1) {
//           result.push(s[i]);
//         } else {
//           result.push(String(num), s[i]);
//         }
//         i = j;
//       }
//     }
    
//     return result.join('');
//   };