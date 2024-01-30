var distributeCandies = function(candyType) {
    const candyTypes = new Set(candyType).size
    if (candyTypes < candyType.length / 2) {
        return candyTypes
    }
    return candyType.length / 2
};