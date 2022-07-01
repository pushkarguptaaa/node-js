const first = "Pushkar";
const last = "Gupta";

function output(message) {
  return `${message} ${first} ${last}`;
}
// console.log(output("hi"));
module.exports.output = output;
