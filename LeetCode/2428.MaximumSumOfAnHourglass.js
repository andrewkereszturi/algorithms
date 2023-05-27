var maxSum = function(grid) {
    let max = 0;
    for(let i = 1; i < grid.length-1; i++) {
        for(let j = 1; j < grid[i].length-1; j++) {
            const top = grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1]
            const bottom = grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1]
            const hourglass = grid[i][j] + top + bottom;
            if(hourglass > max) {
                max = hourglass
            }
        }
    }
    return max
};