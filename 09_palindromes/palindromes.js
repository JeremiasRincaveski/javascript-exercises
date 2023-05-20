const palindromes = function (str) {
  const stringLimpa = str.toLowerCase().replace(/[^a-z]/g, "")
  return stringLimpa == stringLimpa.split('').reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
