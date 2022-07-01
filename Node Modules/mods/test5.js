module.exports = function (first, last) {
  this.first = first;
  this.last = last;
  this.newMod = "Hello World";
  this.myName = function () {
    return `${this.newMod} ${first} ${last}`;
  };
};
