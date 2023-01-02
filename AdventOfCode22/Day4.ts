import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day4-input.txt", "utf8");
  const lines = rawLines.split("\n");

  let contains = (pairSets: any) => {

    let total = 0;

    for (let i = 0; i < pairSets.length; i++) {
        let startRange1 = 0;
        let startRange2 = 0;
        let endRange1 = 0;
        let endRange2 = 0;
        let pairs = pairSets[i];
        if (pairs[1] === '-') {

            startRange1 = pairs[0];

            if (pairs[3] === ',') {
                endRange1 = pairs[2]
                if (pairs[5] === '-') {
                    startRange2 = pairs[4]
                    if (!pairs[7]) {
                        endRange2 = pairs[6];
                    } else {
                        endRange2 = pairs[6].concat(pairs[7])
                    }
                } else {
                    endRange1 = pairs[4].concat(pairs[5])
                    if (!pairs[8]) {
                        endRange2 = pairs[7];
                    } else {
                        endRange2 = pairs[7].concat(pairs[8])
                    }
                }

            } else {

                endRange1 = pairs[2].concat(pairs[3]) 

                if (pairs[6] === '-') {
                    startRange2 = pairs[5]
                    if (!pairs[8]) {
                        endRange2 = pairs[7];
                    } else {
                        endRange2 = pairs[7].concat(pairs[8])
                    }
                } else {
                    startRange2 = pairs[5].concat(pairs[6])
                    if (!pairs[9]) {
                        endRange2 = pairs[8];
                    } else {
                        endRange2 = pairs[8].concat(pairs[9])
                    }
                }
            }

        } else {

            startRange1 = pairs[0].concat(pairs[1])

            if (pairs[4] === ',') {
                endRange1 = pairs[3]

                if (pairs[6] === '-') {
                    startRange2 = pairs[5]
                    if (!pairs[8]) {
                        endRange2 = pairs[7];
                    } else {
                        endRange2 = pairs[7].concat(pairs[8])
                    }
                } else {
                    startRange2 = pairs[5].concat(pairs[6])
                    if (!pairs[9]) {
                        endRange2 = pairs[8];
                    } else {
                        endRange2 = pairs[8].concat(pairs[9])
                    }
                }
            } else {
                endRange1 = pairs[3].concat(pairs[4]) 
                if (pairs[7] === '-') {
                    startRange2 = pairs[6]
                    if (!pairs[9]) {
                        endRange2 = pairs[8];
                    } else {
                        endRange2 = pairs[8].concat(pairs[9])
                    }
                } else {
                    startRange2 = pairs[6].concat(pairs[7])
                    if (!pairs[10]) {
                        endRange2 = pairs[9];
                    } else {
                        endRange2 = pairs[9].concat(pairs[10])
                    }
                }
            }
        }
        if (Number(startRange1) <= Number(startRange2) && Number(endRange1) >= Number(endRange2)) {
            console.log("***********")
            total++
        } else if (Number(startRange1) >= Number(startRange2) && Number(endRange1) <= Number(endRange2)) {
            console.log("***********")
            total++
        }
        console.log(startRange1,"-",endRange1,",",startRange2,"-",endRange2)

    }
    
    
    return total

  }

  


    console.log("Contains: ", contains(lines));

};

run();

// Wrong answers PT 2 : 302, 306 (too low), 309, 320, 504, 517(too high)