const leapYears = function(ano) {
  return ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0) ? true : false
};

console.log(leapYears(1996))

// Do not edit below this line
module.exports = leapYears;
