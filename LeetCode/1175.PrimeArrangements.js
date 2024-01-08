const isPrime = (num) => {
    if (num === 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        } 
    }
    return true
}

var numPrimeArrangements = function(n) {
    let prime = 0;
    let notPrime = 0;
    let arrangements = 1;
    const mod = 10 ** 9 + 7

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            arrangements *= ++prime
            arrangements = arrangements % mod
        } else {
            arrangements *= ++notPrime
            arrangements = arrangements % mod
        }
    }

    return arrangements;
};