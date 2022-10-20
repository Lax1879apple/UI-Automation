//block of code

function add(a, b) {
    return a + b;

}

let sum = add(5, 10);
console.log(sum)

//do not have name = > Anyonymus function--> function expressions

let sumOfIntegers = function(c, d) {

    return c + d
}
console.log(sumOfIntegers(3, 5))

// above sumOfIntegers function can be achieved in two lines of code using fact pipe anyonymus function as show below
let sumOfNumbers = (c, d) => c + d
console.log(sumOfNumbers(3, 5))


// scope of the variables  in JS
// var-> global level/functional
//let -> 
//const-> global level/block level{}