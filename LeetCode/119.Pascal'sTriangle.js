// Given an integer numRows, return the first numRows of Pascal's triangle.

// Iterative Solution

var generate = function(numRows) {

    let triangle = [[1], [1,1]];

    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return triangle;
    }

    for (let row = 1; row < numRows-1; row++) {
        let newRow = [1,1];
        let lastRow = triangle[triangle.length-1];

        for (let j = 0; j < lastRow.length-1; j++) {
            newRow.splice(j+1, 0, lastRow[j] + lastRow[j+1])
        }
        triangle.push(newRow)
    }
    return triangle;
};

// Recursive Solution with helper
// var generateTriangle = function(numRows, triangle) {

//     if (numRows === 1) {
//         return triangle;
//     }

//     let newRow = [1];
//     let lastRow = triangle[triangle.length-1];

//     for (let i = 0; i < lastRow.length-1; i++) {
//         newRow.push(lastRow[i] + lastRow[i+1])
//     }    
//     newRow.push(1)
//     triangle.push(newRow)
//     return generateTriangle(numRows - 1, triangle)
// };

// var generate = function(numRows) {

//     let triangle = [[1]];
    
//     if (numRows === 1) {
//         return triangle;
//     }

//     return generateTriangle(numRows, triangle)
// };

// Recursive Solution

var generate = function(numRows) {

    if (numRows === 1) {
        return [[1]];
    }

    const previousRows = generate(numRows - 1);
    const previousRow = previousRows[previousRows.length - 1];

    const row = [1];

    for (let i = 1; i < numRows-1; i++) {
        row.push(previousRow[i-1] + previousRow[i]) 
    }

    row.push(1);

    return [
        ...previousRows,
        row
    ]
}

let result = generate(1);
console.log(result)