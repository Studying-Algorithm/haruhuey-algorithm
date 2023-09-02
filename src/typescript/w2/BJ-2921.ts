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
        const D = 1.5;
        let totalDot = 0;

        for (let i = 0; i < +values + 1; i++) {
            totalDot += D * i * (i + 1);
        }

        console.log(totalDot);
    });
})();
