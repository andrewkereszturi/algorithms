import { readFileSync } from 'fs';

const run = async () => {
  const rawLines = readFileSync("Day2-input.txt", "utf8");
  const lines = rawLines.split("\n");

  const rockPaperScissors = (strategy: any) => {

    interface pointsType {  
        [key: string]: number;
    } 


      
    const points : pointsType = { "A": 1, "B": 2, "C": 3, "X": 1, "Y": 2, "Z": 3 };  

    const player1Wins = (a: any, b: any) => {
        console.log("P1")

        if (a === "A" && b === "Z") {
            return true;
        } else if (a === "B" && b === "A") {
            return true;
        } else if (a === "C" && b === "B") {
            return true;
        } else {
            return false;
        } 
    }
    const player2Wins = (a: any, b: any) => {
        console.log("P2")
        if (b === "A" && a === "Z") {
            return true;
        } else if (b === "B" && a === "A") {
            return true;
        } else if (b === "C" && a === "B") {
            return true;
        } else {
            return false;
        } 
    }
       
    let totalPoints1 = 0;
    let totalPoints2 = 0;

    for (let i = 0; i < strategy.length; i++) {
        if (points[strategy[i][0]] === points[strategy[i][2]]) {
            totalPoints1 += points[strategy[i][0]] + 3;
            totalPoints2 += points[strategy[i][2]] + 3;
            console.log("DRAW: ", points[strategy[i][0]], " to ", points[strategy[i][2]])
            console.log("PLAYER 1: ", totalPoints1, " PLAYER 2: ", totalPoints2)
        } else if (player1Wins(strategy[i][0], strategy[i][2])) {
            totalPoints1 += points[strategy[i][0]] + 6;
            totalPoints2 += points[strategy[i][2]]
            console.log("1 WINS: ", points[strategy[i][2]], " to ", points[strategy[i][0]])
            console.log("PLAYER 1: ", totalPoints1, " PLAYER 2: ", totalPoints2)
        } else if (player2Wins(strategy[i][0], strategy[i][2])) {
            totalPoints2 += points[strategy[i][2]] + 6;
            totalPoints1 += points[strategy[i][0]]
            console.log("2 WINS: ", points[strategy[i][2]], " to ", points[strategy[i][0]])
            console.log("PLAYER 1: ", totalPoints1, " PLAYER 2: ", totalPoints2)
        } else {
            console.log("NOBODY WON")
        }
    }
    console.log(totalPoints1, totalPoints2)
  }


    console.log("TOP POINTS: ", rockPaperScissors(lines));

};

run();

