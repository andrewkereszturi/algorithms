var isAnagram = function(s, t) {

    if(s.length !== t.length) {
        return false
    }

    let sArr = [...s].sort()
    let tArr = [...t].sort()

    for (let i = 0; i < s.length; i++) {
        if(sArr[i] !== tArr[i]) {
            return false;
        }
    }
    
    return true
};