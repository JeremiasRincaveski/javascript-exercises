const repeatString = function(string, qnt) {
  let msg = ''
  if (string == '') {
    return ''
  } else {
    if (qnt == 0) {
      return msg
    }
    if (qnt > 0) {
      for (let index = 0; index < qnt; index++) {
        msg += string
      }
      return msg
    }
    if (qnt < 0) {
      return 'ERROR'
    }
  }
}

// Do not edit below this line
module.exports = repeatString;
