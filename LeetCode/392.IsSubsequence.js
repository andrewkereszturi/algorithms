var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false
    } else if (s === t ) {
        return true
    }
    if (s.substring(0,1) === t.substring(0,1)) {
      return isSubsequence(s.substring(1), t.substring(1))
        
    } else {
        return isSubsequence(s, t.substring(1))
    }
};