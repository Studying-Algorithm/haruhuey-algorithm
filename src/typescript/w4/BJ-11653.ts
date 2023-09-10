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
        const factorization = (num: number) => {
            const factors: number[] = [];

            while (num % 2 === 0) {
                factors.push(2);
                num /= 2;
            }

            for (let i = 3; i * i <= num; i += 2) {
                while (num % i === 0) {
                    factors.push(i);
                    num /= i;
                }
            }

            if (num > 2) {
                factors.push(num);
            }

            return factors;
        }

        const factors = factorization(+values);
        factors.forEach((fact) => {
            console.log(fact);
        })
    });
})();
