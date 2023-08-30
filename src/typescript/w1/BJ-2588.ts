import readline from "readline";
// const readline = require("readline");

(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let lines: string[] = [];

    const multiplying = () => {
        const [valueFirst, valueSecond] = lines.map(v => +v);
        const valueSecondDigits = valueSecond.toString().split("").map(v => +v).reverse();
        let solvingProcessValues: number[] = [];
        let resultValue: number = 0;

        for (let i = 0; i < valueSecond.toString().length; i++) {
            solvingProcessValues.push(valueFirst * valueSecondDigits[i]);
            resultValue += solvingProcessValues[i] * Math.pow(10, i);

            console.log(solvingProcessValues[i]);
        }

        console.log(resultValue);
    }

    rl.on("line", (ln) => {
        lines.push(ln);
    }).on("close", () => {
        multiplying();
    });
})();
