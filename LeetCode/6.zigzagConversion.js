var convert = function(s, numRows) {
    if (numRows === 1) {
        return s
    }

    let zigzag = '';
    let row = '';

    const incrementAmount = 2 * numRows - 2

    for(let i = 0; i < numRows; i++) {
        for(let j = i; j < s.length; j++) {
            if(i !== 0 && i !== numRows - 1 && (j - i ) % incrementAmount === 0) {
                 row = row.concat(s[j])
            } 
            if((j + i ) % incrementAmount === 0) {
                row = row.concat(s[j])
            }
        }
        zigzag = zigzag.concat(row)
        row = ''
    } 
    
    return zigzag;
};

