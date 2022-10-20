module.exports = class Person { // module.exports = => will make class public to export into other files and can be imported in other files in the project.

        age = 25

        //location="canada"
        get location() // using getter method. This is not a function
            {

                return "canada"
            }

        // we can also have a consturctor
        // constructor is method which executes by default when you create object of the class
        constructor(firstName, lastName) // this arguments creates instanse variable so we pass the value while object creation.
            {

                this.firstName = firstName
                this.lastName = lastName
            }
        fullName() {
            console.log(this.firstName + this.lastName)
        }

    }
    //let person = new Person("Laxman", "Chamlagai")
    // console.log(person.age)
    // console.log(person.location)

// console.log(person.fullName())