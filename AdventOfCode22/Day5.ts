import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day5-input.txt", "utf8");
  const lines = rawLines.split("\n");

  let crates = lines.slice(0,9);
  interface cratesType {  
    [key: string]: any;
  } 
  let allCrates: cratesType = {};
  console.log(crates)

  let temp: any = [];

  for (let i = 0; i < crates.length; i++) {
    for (let j = 0; j < crates[i].length; j++) {
        if (crates[i][j] !== '[' && crates[i][j] !== ']' && crates[i][j] !== ' ') {
            // console.log(crates[i][j])
            temp.push(crates[i][j])
            // console.log("TEMP:", temp)
        }  if (i === crates.length -1) {
            console.log(crates[i][j]);
            console.log("TEMP", temp);
            allCrates[crates[i][j]] = temp;
            temp = [];
        }
    }
    console.log("ALL CRATES: ", allCrates)
  }

  let getTopCrates = (pairSets: any) => {


  }

  
console.log("Contains: ", getTopCrates(lines));

};

run();

// Wrong answers PT 2 : 302, 306 (too low), 309, 320, 504, 517(too high)