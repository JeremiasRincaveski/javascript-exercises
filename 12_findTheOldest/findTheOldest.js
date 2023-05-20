const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

const findTheOldest = function(pessoas) {
  // return pessoas.sort((lastPerson, nextPeson) => {
  //   return lastPerson.yearOfDeath - lastPerson.yearOfBirth > nextPeson.yearOfDeath - nextPeson.yearOfBirth ? -1 : 1
  // })[0]

  return pessoas.reduce((total, atual) => {
    teste = verificaIdade(atual.yearOfBirth, atual.yearOfDeath)
    return verificaIdade(total.yearOfBirth, total.yearOfDeath) > teste ? total : atual
  })
};

function verificaIdade(nasceu, morreu) {
  if (!morreu) morreu = new Date().getFullYear()
  return morreu - nasceu
}

console.table(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
