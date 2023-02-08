/*let david = {name: "David", currentAge: 25, maxAge: 100, amountPerWeek: 6}
let michael = {name: "Michael", currentAge: 62, maxAge: 85, amountPerWeek:10 }
let sara = {name: "Sara", currentAge: 12, maxAge: 40 , amountPerWeek: 2} */
const person = [
   {name: "David", currentAge: 25, maxAge: 100, amountPerWeek: 6},
   {name: "Sara", currentAge: 12, maxAge: 40 , amountPerWeek: 2},
   {name: "Michael", currentAge: 62, maxAge: 85, amountPerWeek:10 }
]

function totalPotatoConsumption(name) {
   let totalPotatoes = 0;
   totalPotatoes = (person.maxAge - person.currentAge) * 365/7 * person.amountPerWeek;
   return `${name} is ${currentAge} years old and will live to be ${maxAge} years old. ${name} will take in ${totalPotatoes} number of potatoes till the last day of his/her life.`
}
totalPotatoConsumption("Sara");


//console.log(`${person.name} is ${currentAge} years old and will live to be ${maxAge} years old. ${name} will take in ${totalPotatoConsumption()} number of potatoes till the last day of his/her life.`)
