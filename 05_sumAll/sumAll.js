const sumAll = function(num1, num2) {
  let valor = num1 + num2
  
  if ((num1 > 0 && Number.isInteger(num1)) && (num2 > 0 && Number.isInteger(num2))) {
    if (num1 > num2) {
      num2++
      for (let i = num2; i < num1; i++) {
        valor += i
      }
      return valor
    } else {
      return sumAll(num2, num1)
    }
  }
}
console.log(sumAll(1, 4))

// Do not edit below this line
module.exports = sumAll;
