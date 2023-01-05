import { readFileSync } from 'fs';

const run = async () => {
  const str = readFileSync("Day6-input.txt", "utf8");


  const getTopCrates = (str: any) => {  

    for (let i = 0; i < str.length; i++) {

        let seen: any = {}
        
        console.log(str.slice(0,10))

        for (let j = 0; j < 5; j++) {
            if (seen[str[i+j]] === 1) {
                // console.log(seen)
                // console.log("*", str[i+j], i)
                break
            } else {
                seen[str[i+j]] = 1;
            }
            if (seen[str[i+4]] === 1) {
                console.log(i)
                return
            }
        }
        // console.log(seen)
    }

  }

  
console.log("Contains: ", getTopCrates(str));

};

run();

// Wrong answers PDTCWHPFM