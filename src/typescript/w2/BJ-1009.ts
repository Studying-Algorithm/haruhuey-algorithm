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
        const calLastComputerNumber = (base: number, pow: number): number => {
            const lastDigitOfBase = base % 10;
            const periodPow = (pow - 1) % 4;

            return Math.pow(lastDigitOfBase, periodPow + 1) % 10 || 10;
        }

        const testCase = Number(lines[0]);
        const testCasesInput = lines.slice(1);

        for (let i = 0; i < testCase; i++) {
            const [base, pow] = testCasesInput[i].split(' ').map(Number);
            console.log(calLastComputerNumber(base, pow));
        }
    });
})();
