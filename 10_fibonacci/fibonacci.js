const fibonacci = function(num) {
  if (num < 1) return 'OOPS'
  let a = 0
  let b = 1
  for (let i = 1; i < num; i++) {
    const aux = b
    b = b + a
    a = aux
  }
  
  return b
};

console.log(fibonacci(4))

// Do not edit below this line
module.exports = fibonacci;
