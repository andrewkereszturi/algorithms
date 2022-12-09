import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day1-input.txt", "utf8");
  const lines = rawLines.split("\n");

  let maxCalories = (cals: any) => {

    let maxCals = 0;
    let currentCals = 0;

    for (let i = 0; i < cals.length; i++) {
        if (cals[i] === '') {
            if(maxCals < currentCals) {
                maxCals = currentCals;
                currentCals = 0;
                i++;
            } else {
                currentCals = 0;
                i++;
            }
        }

        currentCals = currentCals + Number(cals[i]);
    }
    
    return maxCals;
}

    console.log("ANSWER : ",maxCalories(lines));
};

run();

