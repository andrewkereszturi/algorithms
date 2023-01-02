import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day5-input.txt", "utf8");
  const lines = rawLines.split("\n");

  let crates = lines.slice(0,9);
  let allCrates = {};

  for (let i = 0; i < crates.length; i++) {
    
    let temp = [];

    for (let j = 0; j < crates[i].length; j++) {
        // console.log(crates[j][i])
        if (crates[i][j] === '[' || crates[i][j] === ']') {
            
        } else if (Number.isInteger(Number(crates[i][j]))) {
            // console.log(crates[i][j])
        } else if (i === 8) {
            console.log(Number(crates[i][j]))
        }
    }
    // console.log(crates[i][1])
    // console.log(crates[8][1])
  }

  let getTopCrates = (pairSets: any) => {


  }

  
console.log("Contains: ", getTopCrates(lines));

};

run();

// Wrong answers PT 2 : 302, 306 (too low), 309, 320, 504, 517(too high)