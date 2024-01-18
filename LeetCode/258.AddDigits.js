var addDigits = function(num) {

    if (num < 10 ) {
        return num
    }

    let sum = num.toString().split("").map(Number).reduce((acc, curr) => acc + curr)

    if (sum >= 10) {
      return addDigits(sum)
    }
   return sum
    
};