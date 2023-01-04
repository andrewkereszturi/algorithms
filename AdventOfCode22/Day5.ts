import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day5-input.txt", "utf8");
  const lines = rawLines.split("\n");

  const getTopCrates = (lines: any) => {
    const crates = lines.slice(0,9);
    interface cratesType {  
      [key: string]: any;
    } 
    let allCrates: cratesType = {};
  
    console.log(crates)
  
    let temp: any = [];
  
    for (let j = 1; j <= 33; j++) {
      for (let i = 0; i < 8; i++) {
          if (crates[i][j] !== ' ' && crates[i][j] !== '[' && crates[i][j] !== ']') {
              temp.push(crates[i][j])
          }
      }
      if (allCrates[crates[8][j]] !== '' && allCrates[crates[8][j]] !== ' ') {
          allCrates[crates[8][j]] = temp
          temp = [];
      }
    }
    delete allCrates[' ']
    console.log(allCrates)

    const moves = lines.slice(10, lines.length)

    for (let i = 0; i < moves.length; i++) {

        let move = moves[i].split(' ')

        console.log(move)

        for (let j = 0; j < move[1]; j++) {
            const crate =  allCrates[move[3]].shift()
            allCrates[move[5]].unshift(crate)
        }
        console.log(allCrates)

    }
    // console.log(allCrates)

  }

  
console.log("Contains: ", getTopCrates(lines));

};

run();

// Wrong answers PDTCWHPFM