var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0]
    }

    let sorted = strs.sort((a, b) => a.length - b.length)
    const shortest = sorted[0].split('')
    let prefixes = []

    for (let i = 1; i < sorted.length; i++) {
        let prefix = ''
        let current = sorted[i].split("")   
             
        for (let j = 0; j < shortest.length; j++) {
            if (current[j] === shortest[j]) {
                prefix = prefix + shortest[j]
            } else {
                j = shortest.length -1
            }
        }
        prefixes.push(prefix);
    }

    let sortedPrefixes = prefixes.sort((a, b) => a.length - b.length)
    return sortedPrefixes[0]
}; 