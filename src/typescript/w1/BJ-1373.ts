import readline from "readline";
// const readline = require("readline");

/*
* Solve 1 * Baekjoon Not Work -> BigNumber Issue
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (ln) => {
        const toDec = parseInt(ln, 2);
        const toOct = toDec.toString(8);

        console.log(toOct);
    }).on("close", () => {
        process.exit();
    });
})();

/*
* Solve 2 * Baekjoon Not Work -> BigNumber Issue
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (ln) => {
        const binaryArray = ln.split("").map(v => +v);
        let temp: number[] = [];

        for (let i = 0; i < binaryArray.length; i++) {
            temp.push(binaryArray[i] * (2 ** (binaryArray.length - i - 1)));
        }

        let divisionValue = temp.reduce((pv, cv) => pv + cv);
        let remainderArray: number[] = [];

        while (divisionValue > 0) {
            remainderArray.push(divisionValue % 8);
            divisionValue = Math.floor(divisionValue / 8);
        }

        const octal = remainderArray.reverse().join("");
        console.log(octal);
    }).on("close", () => {
        process.exit();
    });
})();

/*
* Solve 3
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (ln) => {
        const paddedBinary = ln.padStart(ln.length + (3 - (ln.length % 3)) % 3, '0');
        let octal = '';

        for (let i = 0; i < paddedBinary.length; i += 3) {
            octal += parseInt(paddedBinary.substring(i, i + 3), 2)
                .toString(8);
        }

        console.log(octal);
    }).on("close", () => {
        process.exit();
    });
})();

/*
* Solve 4
* */
(() => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (ln) => {
        let octal = '';
        const binaryLength = ln.length % 3 || 3;
        let chunk = parseInt(ln. slice(0, binaryLength), 2).toString(8);

        octal += chunk;

        for (let i = binaryLength; i < ln.length; i += 3) {
            chunk = parseInt(ln.slice(i, i + 3), 2).toString(8);
            octal += chunk;
        }

        console.log(octal);
    }).on("close", () => {
        process.exit();
    });
})();