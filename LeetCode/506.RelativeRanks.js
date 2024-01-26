var findRelativeRanks = function(score) {
    let sorted = score.toSorted((a, b) => b - a);
    let map = {}
    if (sorted.length > 3) {
        for (let i = 3; i < sorted.length; i++) {
            let placement = i+1
            map[sorted[i]] = placement.toString()
        }
    }    

    for (let i = 0; i < score.length; i++) {
        if (score[i] === sorted[0]) {
            score[i] = "Gold Medal"
        } else if (score[i] === sorted[1]) { 
            score[i] = "Silver Medal"
        } else if (score[i] === sorted[2]) {
            score[i] = "Bronze Medal"
        }  else {
            score[i] = map[score[i]]
        }
    }
    return score 
};