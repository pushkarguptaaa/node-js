// NODE MODULES TYPES

const test1 = require("./test1");
const test2 = require("./test2");

// console.log(module.filename);
test1.test2();
console.log(test1);
const myName = `${test1.person.first} ${test1.person.last}`;
const myName1 = `${test2.person.first} ${test2.person.last}`;
console.log(myName);
console.log(myName1);

// LOCAL MODULES
const output1 = require("./test3");
const output2 = require("./test4");
console.log(output1);
console.log(output1("hi"));
console.log(output2);
console.log(output2.output("TEST"));
console.log(output2.val2);
console.log(output2.val1);
console.log(output2.val3);

// LOCAL NODE MODULES EXPORTS CLASS

const person = require("./mods/test5");
const friend1 = new person("Pushkar", "Gupta");
const friend2 = new person("Sandeep", "Gupta");
const friend3 = new person("Anuradha", "Gupta");

console.log(friend1);
console.log(friend1.first);
console.log(friend1.last);
console.log(friend1.myName());
console.log(friend2.myName());
console.log(friend3.myName());
console.clear();

// CORE MODULES HTTP SERVER SETUP

const http = require("http");
// console.log(http);
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url == "/") {
      res.write("Main Landing Page");
    } else if (req.url == "/test") {
      res.write("Test Page");
    } else {
      res.write("PAGE NOT FOUND!");
    }
    res.end();
  })
  .listen(8080);
console.log("Server running...");

const myJson = require("./json");
console.log(myJson);
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(myJson));
    res.end();
  })
  .listen(5000);
console.log("Server running...");
