const currentDate = new Date(2012, 5, 4)

function getDateFormat(date, separator = '.') {
    let currentDay = date.getDate()
    console.log()
    if (currentDay < 10) {
       currentDay = '0' + currentDay
    }
    let currentMonth = date.getMonth() + 1
    if (currentMonth < 10) {
        currentMonth = '0' + currentMonth
    }
    return (currentDay + separator +  currentMonth + separator + date.getFullYear())
}

console.log(getDateFormat(currentDate))
