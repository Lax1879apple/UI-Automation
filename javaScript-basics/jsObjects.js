// To import person class (classInJS.js), we do as below
const Person = require("./classInJS")


// js object is collection of properties

// lets say, we want person object

let person = {

    firstName: 'Laxman',
    lastName: 'Kshetri',
    age: 25,
    country: "USA",
    //JS object can not only have property and value but can also have functions, and perform action inside the function as shown below
    fullName: function() {

        console.log(this.firstName + this.lastName) // 'this' represent current object
    }
}

// to print the property of person object, simply we access referring the 'object.property' as shown below
console.log(person.lastName) // this is using '.notation'
console.log(person['lastName']) // array like notation, but we need to put in quatotion as it is string

person.firstName = 'Rita' // update the person's property value at run time
console.log(person.firstName)

person.gender = "male" // add new property if no such property is initially present
console.log(person)

delete person.gender
console.log(person)

// we can perform to check if property exists 

console.log('gender' in person) // if property present returns true if not, returns false; in this case we deleted gender property so it should return false.

// print all the values of the javascript object
// Iteration in object

for (let key in person) {

    console.log(person[key])
}

//console.log(person.fullName) // this will not work because fullName () is a function and should have ()
console.log(person.fullName())

console.log("**************")
    // using a simple for loop, print all the properties of person object

for (let key in person) {
    console.log(person[key])
}

// below is object instance creation of the "class Person" and we are accessing fullName method of that class
console.log("*************")
let person1 = new Person("Suresh", "Kumar")
person1.fullName();