import fs from "fs";
import { getPosition } from "suncalc";

async function main() {
    if (!fs.existsSync("log.txt")) {
        fs.writeFileSync("log.txt", 'time;value\r\n');
    }

    const start = new Date('2023-01-01T00:00:00.000Z');
    const end = new Date('2023-12-31T23:00:00.000Z');
    const hour = 1000 * 60 * 60; // in milliseconds

    for (let current = start.getTime(); current <= end.getTime(); current += hour) {
        const date = new Date(current);
        const sunPos = getPosition(
            date,
            53.545, 9.936   // Hamburg
        );

        fs.writeFileSync("log.txt", `${date.toISOString()};${sunPos}\r\n`)
    }
}

//Invoke the main function
main().catch(err => {
    console.log(err);
});