import { readFileSync } from 'fs';

const run = async () => {
  const str = readFileSync("Day6-input.txt", "utf8");

  const packetMarker = (str: any) => {  

    for (let i = 0; i < str.length; i++) {

        let seen: any = {}
        
        // For part 1 change 15 to 5
        for (let j = 0; j < 15; j++) {
            if (seen[str[i+j]] === 1) {
                break
            } else {
                seen[str[i+j]] = 1;
            }
            // For part 1 change 14 to 4
            if (Object.keys(seen).length === 14) {
                console.log(str.slice(i, i+14))
                console.log(i + 14)
                return i+14;
            }
        }
    }
  }

console.log("Packet Marker: ", packetMarker(str));

};

run();
