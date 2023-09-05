import * as readline from "readline";

/*
* Solve 1
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let values: string = '';

    rl.on("line", (ln) => {
        values = ln;
    }).on("close", () => {
        let calculateNumber = Math.floor(Math.sqrt(2 * +values));

        while (calculateNumber * (calculateNumber + 1) > 2 * +values) {
            calculateNumber--;
        }

        console.log(calculateNumber);
    });
})();

/*
* Solve 2 - Not Use qe and Math
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let values: string = '';

    rl.on("line", (ln) => {
        values = ln;
    }).on("close", () => {
        let calculateNumber = 1;

        while (true) {
            const sum = (calculateNumber * (calculateNumber + 1)) / 2;
            if (sum > +values) {
                break;
            }
            calculateNumber++;
        }

        console.log(calculateNumber - 1);
    });
})();
