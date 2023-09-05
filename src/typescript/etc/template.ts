import * as readline from "readline";

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let lines: string[] = [];
    let values: string = '';

    rl.on("line", (ln) => {
        lines.push(ln);
        values = ln;
    }).on("close", () => {
        // const [valueX, valueY] = values.split(" ").map(v => +v);
        // Function
    });
})();