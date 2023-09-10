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
        const checkPrime = (num: number): boolean => {
            if (num <= 1) return false;
            if (num <= 3) return true;
            if (num % 2 === 0 || num % 3 === 0) return false;

            for (let i = 5; i * i <= num; i += 6) {
                if (num % i === 0 || num % (i + 2) === 0) return false;
            }

            return true;
        }

        const numbers: number[] = lines[1].split(" ").map(Number);
        let primeCount: number = 0;

        for (let i = 0; i < +lines[0]; i++) {
            if (checkPrime(numbers[i])) {
                primeCount++;
            }
        }

        console.log(primeCount);
    });
})();
