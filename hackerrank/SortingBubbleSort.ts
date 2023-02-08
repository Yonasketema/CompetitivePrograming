'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'countSwaps' function below.
 *
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function countSwaps(a: number[]): void {
     const n = a.length;
    let numberOfSwap = 0;
    for (let i = 0; i < n - 1; i++) {
        let isSwaped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                if (a[j] > a[j + 1]) {
                    [a[j], a[j + 1], isSwaped] = [a[j + 1], a[j], true];
                    numberOfSwap++;
                }


            }
        }
        if (isSwaped === false) {
            break;

        }
    }
    console.log(`Array is sorted in ${numberOfSwap} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[n - 1]}`)

}

function main() {
    const n: number = parseInt(readLine().trim(), 10);

    const a: number[] = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    countSwaps(a);
}
