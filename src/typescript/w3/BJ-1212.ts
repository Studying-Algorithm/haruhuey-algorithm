import * as readline from "readline";

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let values: string = '';

    rl.on("line", (ln) => {
        values = ln;
    }).on("close", () => {
        console.log(values
            .split('')
            .map((digit, i) => {
                const binaryDigit = parseInt(digit, 8).toString(2);
                return i === 0 ? binaryDigit : binaryDigit.padStart(3, '0');
            })
            .join(''));
    });
})();