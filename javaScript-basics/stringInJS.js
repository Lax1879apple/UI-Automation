const Person = require("./classInJS") // importing my classInJS.js class

let day = "Tuesday "

// String is a collection of characters as in array, it is a collection of elements.

console.log(day.length) // 8 which includes on blank space 

let subDay = day.slice(0, 4) //Tues 
console.log(subDay) // output = Tues
console.log(day[2]) // output = e

//        Tues     day
// index   0        1
let daySplit = day.split("s") // it will split base on the character we define i.e 's'. Once it is splited, JS will store it into an array
console.log(daySplit[1]) // day
console.log(daySplit[0]) // Tue

console.log(daySplit[1].length) //4

console.log(daySplit[1].trim().length) // 3 'white' space after day is removed

// sometimes while getting object from browser, you get it int value as String as shown below. If you need to perfor some operation on these two, we need to change to Integer value which can be
// done by using 'parseInt' method and integer to String by using 'toString' method.
let date = "25"
let nextDate = "27"
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)

diff.toString()

//concatinate operation

let weekday = day + "is a regular work day"
console.log(weekday)

let person = new Person("Chris", "Worthy")
console.log(person.fullName())

console.log("**************")
let funDay = day + "is workday and kids' school day"
console.log(funDay)
let myday = funDay.indexOf("day") // if you don't want the first day, then put in indexOf("day", 5) ==> this will start to search from 5th index
console.log(myday)

// I want to see how many time "day" occurs in the phrase "Tuesday is workday and kids' school day"
let count = 0;
while (myday !== -1) {
    count++
    myday = funDay.indexOf("day", myday + 1)
}
console.log("day count occurs =" + count)