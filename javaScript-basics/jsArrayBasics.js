// Array is a collection of elements. If you have multiple values to be stored, you can store all those values in a container called array.
// Lets say that we want to store 6 values( marks of students), then we can do 

var marks = Array(6); // array lenght of 6.

var marks = new Array(20, 35, 40, 49, 65, 70); // crating object of array

var marks = [20, 35, 40, 49, 65, 70]; // another way of declearing array. Use this method in this course.
console.log(marks[3]); // prints 49
marks[3] = 41; // change array element 
console.log(marks); // should print array with index 3 value changed from 49 to 10= [20, 35, 40, 41, 65, 70]
console.log(marks.length);

// If we want to add new element to the array, push() will appends new elementt to array

marks.push("total"); // this will append new string element at the end of array
console.log(marks);
marks.push(77); // this will append number at the end of array
console.log(marks);
console.log("*********************");
marks.unshift(12); // this will add element at the beginning of the array, at index zero
console.log(marks); // new array should look like this [12,20, 35, 40, 49, 65, 70,'total',77]
console.log("*********************");
marks.pop() // will delete last element of the array
console.log(marks);

console.log("**********************");

console.log("index of 65 in the marks array is = " + marks.indexOf(65)); // index of method will return the index of the element on the array.
console.log("is 120 present in array = " + marks.includes(120)); // will search if element 120 exist in the array or not, if exists return 'true', if not returns 'false'

console.log("creating sub array of below array ");
marks.pop(); // first delete total from the array, last element and prints out just the numbers array elements removing string element from array.
console.log(marks);

subMarks = marks.slice(2, 6); // will create sub array. It need two parameters starting index of element and ending index of element.
console.log("subArray of marks array is = " + subMarks);

let sum = 0;
for (let i = 0; i < marks.length; i++) {
    //console.log(marks[i]); // this will print one by one array element after each itiration.

    sum = sum + marks[i];

}
console.log(sum);

let total = marks.reduce((sum, mark) => sum + mark, 0);
console.log(total);


var scores = [12, 10, 15, 16, 20, 23]
    // create new array with even numbers of scores array[12,10,16,20]

var evenScores = []
for (let i = 0; i < scores.length; i++) {

    if (scores[i] % 2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores);

// above same filter to get even scores can be achieved by using filter method. One simple line of code
let newFilterEvenScores = scores.filter(number => number % 2 == 0)
console.log(newFilterEvenScores);


// map array function; mapping means maping from one value another. our array newFilterEvenScores = [12,10,16,20]. With array map,
//i want to multiply each element by 2 and create new array of the product of each element [24,20,32,40]

let mapArrayNew = newFilterEvenScores.map(numMap => numMap * 2)

console.log(mapArrayNew); // this should print  array [24,20,32,40]

// do chaining in one single line of code (all above three method, first create new array, just name same array scores as 'scores1' and use all three methods)


let fruits = ["Banana", "Apple", "Papaya", "Orange", "Guava"]
fruits.sort() // will sort array elements