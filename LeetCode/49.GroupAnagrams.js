var groupAnagrams = function(strs) {
    
    let map = {}

    for (let i = 0; i < strs.length; i++) {
        let arr = [...strs[i]].sort()
        if (!map[arr]) {
            map[arr] = [strs[i]]
        } else {
            map[arr].push(strs[i])
        }
    }

    return [...Object.values(map)]

};