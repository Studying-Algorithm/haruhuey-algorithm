import readline from "readline";
// const readline = require("readline");

(() => {
    const MONTH_END_DAY = [
        31, 28, 31, 30,
        31, 30, 31, 31,
        30, 31, 30, 31
    ];
    const DAYS_OF_THE_WEEK = [
        "SUN",
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT"
    ];

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on("line", (ln) => {
        const [valueX, valueY] = ln.split(" ").map(v => +v);

        let dayCount = 0;

        for (let i = 0; i < valueX - 1; i ++) {
            dayCount += MONTH_END_DAY[i];
        }

        const day = DAYS_OF_THE_WEEK[(dayCount + valueY) % 7];
        console.log(day);
    }).on("close", () => {
        process.exit();
    });
})();