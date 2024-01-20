var findWords = function(words) {
    
    let filteredWords = [];

    const row1 = 'qwertyuiop';
    const row2 = 'asdfghjkl';
    const row3 = 'zxcvbnm';

    for (let i = 0; i < words.length; i++) {

        let currentRow = []

        for (let j = 0; j < words[i].length; j++) {
            if (row1.includes(words[i][j].toLowerCase()) && !currentRow.includes('1')) {
                currentRow.push('1')
            } else if (row2.includes(words[i][j].toLowerCase()) && !currentRow.includes('2')) {
                currentRow.push('2')
            } else if (row3.includes(words[i][j].toLowerCase()) && !currentRow.includes('3')) {
                currentRow.push('3')
            }
        }

        if (currentRow.length === 1) {
            filteredWords.push(words[i])
        }
        
    }

    return filteredWords;

};