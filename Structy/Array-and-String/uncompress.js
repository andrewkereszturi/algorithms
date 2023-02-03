const uncompress = (s) => {
    let uncompressed = '';
    let num = '';
    for (let i = 0; i < s.length; i++) {
      if (Number.isInteger(Number(s[i])) === true) {
        num = num.concat(s[i])
      } else {
        num = Number(num);
        for (let j = 0; j < num; j++) {
         uncompressed = uncompressed.concat(s[i])
        }
        num = ''
      }
    }
    return uncompressed;
};

console.log('Expected: ccaaat \nResult:  ', uncompress("2c3a1t"));
console.log('Expected: ssssbb \nResult:  ', uncompress("4s2b"));
console.log('Expected: ppoppppp \nResult:  ', uncompress("2p1o5p")); 
console.log('Expected: nnneeeeeeeeeeeezz \nResult:  ', uncompress("3n12e2z"));
console.log('Expected: yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy \nResult:  ', uncompress("127y"));


// Structy Solution
// const uncompress = (s) => {
//     let result = [];
//     const numbers = '0123456789';
//     let i = 0;
//     let j = 0;
//     while (j < s.length) {
//       if (numbers.includes(s[j])) {
//         j += 1;
//       } else {
//         const num = Number(s.slice(i, j));
//         for (let count = 0; count < num; count += 1) {
//           result.push(s[j]);
//         }
//         j += 1;
//         i = j;
//       }
//     }
//     return result.join('');
// };