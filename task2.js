
const currentDate = new Date(2021, 10, 20)
const nextBirthdayDate = new Date(2022, 1, 21)

function getDaysBeforeBirthday(nextBirthdayDate) {
   return  (nextBirthdayDate.getTime() - currentDate.getTime()) / 1000 / 60 / 60 / 24
}
console.log(getDaysBeforeBirthday(nextBirthdayDate))
