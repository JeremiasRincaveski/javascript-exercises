const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(arr) {
	return arr.reduce((acumulador, atual) => acumulador +=atual, 0)
}

const multiply = function(arr) {
  return arr.reduce((acumulador, atual) => acumulador *= atual, 1)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(valor) {
	if (valor == 0) return 1
  return valor * factorial(valor - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
