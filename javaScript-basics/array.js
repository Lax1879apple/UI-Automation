// Print only even numbers to make a subarray of myArray //output [12,18,20]
var scores = [12, 15, 18, 20, 27];

let EvenSource = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 2 == 0) {
        EvenSource.push(scores[i]);
    }

}
console.log(EvenSource);

//Print same thing using array filter method

let subArray = scores.filter(scores => scores % 2 == 0);
console.log(subArray);

// array map function/method
// create new subArray of even number and multiply each element by 3 . out put [36,54,60]
let mappedArray = subArray.map(score => score * 3);
console.log(mappedArray)

// sum all elements of mappedArray
let totalVal = mappedArray.reduce((sum, val) => sum + val, 0);
console.log(totalVal);

//Now instead of writin long lines of code, get the same sum by chaining all arrays
var scores1 = [12, 15, 18, 20, 27];
let totalSum = scores1.filter(scores => scores % 2 == 0).map(score => score * 3).reduce((score, sum) => score + sum, 0);
console.log(totalSum);