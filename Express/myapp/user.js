const express = require("express");
const router = express.Router();
router.use((req, res, next) => {
  console.log("users middleware");
  next();
});

router.get("/", (req, res) => {
  res.send("Main user");
});
router.get("/info", (req, res) => {
  res.send("User info");
});

module.exports = router;
