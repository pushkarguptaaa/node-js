// JSON AND DATA POST VALUES

const express = require("express");
const app = express();
const router = express.Router();
const users = require("./user");
const port = process.env.PORT || 8080;
const myObj = require("./users");
const bp = require("body-parser");
const logOutput = (req, res, next) => {
  console.log("Middleware in action");
  console.log(req.params);
  next();
};
app.use(logOutput);
app.use(bp.urlencoded({ extended: true }));

// console.log(myObj);

app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/public" + "/index3.html");
});

app.get("/users", (req, res) => {
  res.json(myObj);
});

// OUTPUT JSON URL PARAMS

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  let myJson = [];
  if (myObj.users.some((ele) => ele.id === parseInt(req.params.id))) {
    myJson = myObj.users.filter((ele) => ele.id === parseInt(req.params.id));
  }
  res.json(myJson);
});

// MIDDLEWARE BODYPARSER

app.post("/users", (req, res) => {
  console.log(req.body);
  res.sendFile(__dirname + "/public" + "/index3.html");
});

// EXPRESS ROUTES ROUTER

// app
//   .route("/test")
//   .get("/test", (req, res) => {
//     res.send("test");
//   })

//   .post("/test", (req, res) => {
//     res.send("test1");
//   })

//   .put("/test", (req, res) => {
//     res.send("test2");
//   });

app.use("/users1", users);

app.listen(port, () => {
  console.log(`Ready listening on ${port}`);
});

// EXPRESS APPLICATION GENERATOR
