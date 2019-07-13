"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", function() {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the rotLeft function below.
//solution 1 : O(n)
function rotLeft(a, d) {
  let res = [];
  let len = a.length;
  for (let i = 0; i < len; i++) {
    if (i >= d) res.push(a[i]);
  }

  for (let j = 0; j < d; j++) {
    res.push(a[j]);
  }
  return res;
}

//solution 2 : O(n)
// function rotLeft(a, d) {
//     let res = [];
//     let len = a.length;
//     let k = 0;
//     for (let i = 0; i < len; i++) {
//         if (i < d) {
//             res.push(a[i]);
//         }
//         else {
//             a[k] = a[i];
//             k++;
//         }
//     }

//     for (let j = 0; j < res.length; j++) {
//         a[k] = res[j];
//         k++;
//     }
//     return a;
// }

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const nd = readLine().split(" ");

  const n = parseInt(nd[0], 10);

  const d = parseInt(nd[1], 10);

  const a = readLine()
    .split(" ")
    .map(aTemp => parseInt(aTemp, 10));

  const result = rotLeft(a, d);

  ws.write(result.join(" ") + "\n");

  ws.end();
}
