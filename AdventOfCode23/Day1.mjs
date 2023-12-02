import fs from 'fs'

const run = async () => {
  const rawLines = fs.readFileSync("Day1-input.txt", "utf8");
  const lines = rawLines.split("\n");

  let trebuchet = (val) => {


    
        return val;
  }


    console.log("TREBUCHET : ", trebuchet(lines));

};

run();

