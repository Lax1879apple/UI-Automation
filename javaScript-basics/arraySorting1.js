// There are two types of sorting of array (one is with string and other one is with int values)

var scores = [12, 10, 20, 15, 11, 23]

let fruits = ["Banana", "Apple", "Papaya", "Orange", "Guava"]
fruits.sort() // will sort array elements
console.log(fruits)

// will reverse the fruits
console.log(fruits.reverse())

scores.sort() // will not sort int values properly so there is a logic to use
    //console.log(scores)
    // you can do with writing function as follows

// scores.sort(function(a,b){
//     return a-b
// })


console.log(scores.sort((a, b) => a - b)) // this is similar to bobble sort or recurisive sort

console.log(scores.sort((a, b) => b - a)) // will reverse the order