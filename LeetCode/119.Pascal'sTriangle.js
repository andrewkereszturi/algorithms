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

// Recursive Solution
var generateTriangle = function(numRows, triangle) {

    if (numRows === 2) {
        return triangle;
    }

    let newRow = [1,1];
    let lastRow = triangle[triangle.length-1];

    for (let i = 0; i < lastRow.length-1; i++) {
        newRow.splice(i+1, 0, lastRow[i] + lastRow[i+1])
    }    

    triangle.push(newRow)
    return generateTriangle(numRows - 1, triangle)
};

var generate = function(numRows) {

    let triangle = [[1], [1,1]];

    if (numRows === 1) {
        return [[1]];
    } else if (numRows === 2) {
        return triangle;
    }

    return generateTriangle(numRows, triangle)
};

let result = generate(1);
console.log(result)