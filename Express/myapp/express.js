// INTRO TO EXPRESS

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(fileName);
});

app.get("/test", (req, res) => {
  res.send("<h1>Test</h1>");
});

// SERVING FILES WITH EXPRESS FRAMEWORK

const path = require("path");
const fileName = "index.html";
const url = path.join(__dirname, "public", fileName);
console.log(url);

// ROUTING EXPRESS

app.get("/ab?cd", (req, res) => {
  res.send("<h1>abcd</h1>");
});

app.get("/ab*de", (req, res) => {
  res.send("<h1>ab______cd</h1>");
});

app.get(/z/, (req, res) => {
  res.send("<h1>zzzzzzzz</h1>");
});

// MULTIPLE CALLBACK FUNCTIONS

app.get(
  "/users/:id/:val",
  (req, res, next) => {
    res.send(req.params);
    console.log(req.params.id);
    next();
  },
  (req, res, next) => {
    console.log(`second callback ${req.params.val}`);
    next();
  },
  (req, res, next) => {
    console.log(`third callback ${req.params.val}`);
  }
);

// EXPRESS ROUTE HANDLER GET

app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index3.html");
});

// EXPRESS ROUTE POST

const bp = require("body-parser");
app.use(bp.urlencoded({ extended: true }));

app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(`DONE USER:${req.body.user} ID:${req.body.id}`);
});

// EXPRESS ROUTE UPDATE DELETE

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log("deleted" + id);
  res.send({ status: "delete", id: id });
});

app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log("updated" + id);
  res.send({ status: "update", id: id });
});

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});
