const Person = require("./classInJS")


class Guest extends Person {

    get location() // method is overriden method becaue same method exits in parent class
        {
            return "Foreign country"
        }
        // parent class constructor and child class constructor should be same
    constructor(firstName, lastName) {

        //call parent class constructor in the child class constructor is the first step and it is the rule. use 'super' keyword

        super(firstName, lastName)
    }

}

let guest = new Guest("Hari", "Sam")
guest.fullName()
console.log(guest.location)