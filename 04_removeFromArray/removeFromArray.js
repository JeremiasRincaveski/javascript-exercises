const removeFromArray = function(arr, ...parametros) {
  parametros.forEach(e => {
    for (const valida of arr) {
      if (valida === e) {
        arr.splice(arr.indexOf(e), 1)
      }
    }
  })
  return arr
}

console.log(removeFromArray([1, 2, 3, 4], 3, 5, 1))

// Do not edit below this line
module.exports = removeFromArray;
