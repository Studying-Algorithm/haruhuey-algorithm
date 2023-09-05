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
        const calGcd = (valueA: number, valueB: number): number => {
            return valueB === 0 ? valueA : calGcd(valueB, valueA % valueB);
        }

        const calLcm = (valueA: number, valueB: number): number => {
            return (valueA * valueB) / calGcd(valueA, valueB);
        }

        const [, ...cases] = lines;
        console.log(cases.map((ln) => {
            const [valueA, valueB] = ln.split(' ').map(Number);
            return calLcm(valueA, valueB);
        }).join('\n'));
    });
})();
