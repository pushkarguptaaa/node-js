// NODE PACKAGE MANAGER NPM

const fetch = require("node-fetch");
// console.log(fetch);

fetch("https://randomuser.me/api?results=5")
  .then((res) => res.json())
  .then((json) => {
    // console.log(json.results);
    json.results.forEach((person) => {
      const temp = person.name;
      console.log(`${temp.first} ${temp.last}`);
    });
  });

// fetch("https://google.com")
//   .then((res) => res.text())
//   .then((data) => {
//     console.log(data);
//   });

// PACKAGE JSON NPM

const lodash = require("lodash");

// console.log(lodash);

let ran1 = lodash.random(100);
console.log(ran1);

let ran2 = lodash.random(100, 1000);
console.log(ran2);

const arr = [3, 4, 565, 23, 76, "test"];
console.log(lodash.shuffle(arr));

lodash.times(10, () => {
  console.log(lodash.random(100));
});

// NODE BUFFERS

const str = "Hello World";
const buffer = Buffer.from(str, "utf-8");
console.log(buffer);
for (const val of buffer) {
  console.log(val);
}
const val2 = buffer.toString();
console.log(val2);
const val3 = buffer.slice(0, 5);
console.log(val3);
console.log(val3.toString());

// ERRORS THROW TRY AND CATCH

const fs = require("fs");
const dir = "public";
fs.readdir(dir, (err, files) => {
  if (err) throw err;
  console.log(files);
});

try {
  console.log("Hello");
} catch (err) {
  console.log(err);
}
// class myError extends Error {}
// throw new myError("new error");

// ASSIGNMENT 4

const greet = require("./data");
const message = greet.output("hello");
console.log(message);
