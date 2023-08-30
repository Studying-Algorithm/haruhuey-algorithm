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
        const MAX_KG = 5000; // or Infinity

        const dpArray = new Array(MAX_KG + 1);

        for (let i = 0; i <= MAX_KG; i++) {
            dpArray[i] = MAX_KG + 1;
        }

        dpArray[0] = 0;

        for (const sugarBag of [3, 5]) {
            for (let i = sugarBag; i <= +values; i++) {
                dpArray[i] = Math.min(dpArray[i], dpArray[i - sugarBag] + 1);
            }
        }

        console.log(dpArray[+values] > MAX_KG ? -1 : dpArray[+values]);
    });
})();
