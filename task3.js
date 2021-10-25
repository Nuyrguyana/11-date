const msPerDay = 86400000
function addDays(date, days = 1) {
   return new Date(date.getTime() + msPerDay * days)
}
console.log(addDays(new Date()))
