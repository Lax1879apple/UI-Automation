let score = ["banana", "mango", "apple", "organe", "lemon"];

//to sort string array in javaScript, we use sort()
console.log(score.sort());
// to reverse in decending order, simply use reverse()
console.log(score.reverse());
// in javascript sorting numbers do no work as strings, so we need custome method written

let numberArray = [3, 10, 7, 12, 17, 23, 33, 5];

console.log(numberArray.sort()); // will not sort in order

//custom logic is
let sortedNumber = numberArray.sort(function(a, b) {
    return a - b;
})
console.log(sortedNumber);

//Above same custom sorting method can be shorten to write as below
let sortedNumber2 = numberArray.sort((a, b) => a - b)
console.log(sortedNumber2); // sort in order

let sortedNumber3 = numberArray.sort((a, b) => b - a) // sort in reverse order
console.log(sortedNumber3);