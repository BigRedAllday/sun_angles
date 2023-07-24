import fs from "fs";

async function main() {
    if (!fs.existsSync("log.txt")) {
        fs.writeFileSync("log.txt", 'time;value\r\n');
    }
}

//Invoke the main function
main().catch(err => {
    console.log(err);
});