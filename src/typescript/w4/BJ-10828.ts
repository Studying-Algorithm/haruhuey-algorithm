import * as readline from "readline";

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let lines: string[] = [];

    rl.on("line", (ln) => {
        lines.push(ln);
    }).on("close", () => {
        
    });
})();