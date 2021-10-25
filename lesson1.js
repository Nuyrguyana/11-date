// Date

const date = new Date()
console.log(date)

// new Date (year, month, date, hours, minutes, seconds, ms)
//0 - январь, 11 - декабрь

const newDate = new Date(2000, 1, 10,11,55,5,5000)
console.log(newDate)

console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getDate())


// День недели
// 0 - воскресение, 6 - суббота

console.log(newDate.getDay())


newDate.setFullYear(2012)
newDate.setMonth(2)
newDate.setDate(20)
console.log(newDate)


// getTime

const date1 = new Date(2005, 4, 20)
const date2 = new Date(2006, 4, 10)

// количество мс с Jan 1, 1970

console.log(date1.getTime())
console.log(date2.getTime())

const difference = date2.getTime() - date1.getTime()
console.log(difference / 1000 / 60)