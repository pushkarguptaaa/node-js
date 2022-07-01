test1 = function () {
  console.log("test 100");
};
const person = {
  first: "Pushkar",
  last: "Gupta",
};
// test1();
// console.log(module);
// console.log(module.filename);

exports.test2 = test1;
exports.person = person;
