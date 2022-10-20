class Person {

    age = 25

    //location="canada"
    get location() // using getter method. This is not a function
        {

            return "canada"
        }
}
let person = new Person()
console.log(person.age)
console.log(person.location)