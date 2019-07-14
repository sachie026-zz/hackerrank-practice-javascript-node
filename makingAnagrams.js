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

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
  var aMap = {};
  var aLen = a.length;
  var bLen = b.length;

  for (var i = 0; i < aLen; i++) {
    if (a[i] in aMap) {
      aMap[a[i]] += 1;
    } else {
      aMap[a[i]] = 1;
    }
  }

  var na = 0;
  for (var i = 0; i < bLen; i++) {
    if (b[i] in aMap) {
      aMap[b[i]] -= 1;
    } else {
      na++;
    }
  }

  var total = 0;
  for (let val in aMap) {
    total += Math.abs(aMap[val]);
  }
  return total + na;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const a = readLine();

  const b = readLine();

  const res = makeAnagram(a, b);

  ws.write(res + "\n");

  ws.end();
}
