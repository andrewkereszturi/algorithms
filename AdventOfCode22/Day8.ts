import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day8-input.txt", "utf8");
  const lines = rawLines.split("\n");
  const visibleTrees = (str: any) => {  

    let totalVisible = 2 * str.length + 2 * str[0].length - 4;
    console.log(rawLines)

    for (let i = 1; i < str.length - 1; i++) {

        let highestTop = str[0][i];
        // console.log(highestTop);
        let highestLeft = str[i][0];
        // console.log(highestLeft);
        let highestBottom = str[str.length - 1][i];
        // console.log(highestBottom);
        let highestRight = str[i][str.length - 1];
        // console.log(highestRight);

        let visibleCoordinates: any = {};

        for (let j = 1; j < str[i].length - 1; j++) {

             //TOP
            // for (let k = i - 1; k >= 0; k--) {
            //     if (str[i][j] <= str[k][j]) {
            //         break;
            //     }
            //     else if (str[i][j] > str[k][j] && k === 0) {
            //         console.log("*",i,j)
            //         // console.log(str[i][j],str[k][j]);
            //         totalVisible++
            //         visibleCoordinates[i] = i
            //         console.log(visibleCoordinates)
            //         break
            //     }
            // }

            //LEFT
            // for (let k = j - 1; k >= 0; k--) {
            //     if (str[i][j] <= str[i][k]) {
            //         break;
            //     }
            //     else if (str[i][j] > str[i][k] && k === 0) {
            //         console.log(i,j)
            //         console.log(visibleCoordinates)
            //         if (visibleCoordinates[j] !== i) {
            //             visibleCoordinates[j] = i;
            //             console.log("AFTER:",visibleCoordinates)
            //             totalVisible++
            //         }
            //     }
                
            // }

            //BOTTOM 
            for (let k = i+1 ; k <= str[i].length-1; k++) {
                console.log(str[i][j], str[k][j])
                if (str[i][j] <= str[k][j]) {
                    
                    break;
                }
                else if (str[i][j] > str[k][j]) {
                    console.log("*",i,j)
                    // console.log(str[i][j],str[k][j]);
                    totalVisible++
                    visibleCoordinates[i] = i
                    console.log(visibleCoordinates)
                    break
                }
            }
            

            // console.log(str[i][j], i, j)
        }   
    }

    return totalVisible;
  }

console.log("Visible Trees: ", visibleTrees(lines));

};

run();

//1302 too low