const flag = true;

if (!flag) {
    console.log("condition is satisfied!");
} else {
    console.log(flag);
    console.log("condition is not satisfied!");
}


// conditional statement (while)
let i = 0;
while (i < 12) {
    i++
    console.log(i)
}

// conditional  statement (do while)
console.log("*************************")
do {
    i++
} while (i < 12);
console.log("This from do while loop = " + i);

// Print common multiple of 2 & 5 from zero to ten

for (let k = 1; k <= 10; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        console.log("common multiples of 2 & 5 are = " + k);
    }
}


console.log("bellow is with inner nested loop, if we want to print just first 3 common multiples out of n number of numbers from the outside loop");

let n = 0;
for (let k = 1; k <= 100; k++) {
    if (k % 2 == 0 && k % 5 == 0) {
        n++
        console.log("common multiples of 2 & 5 are = " + k);
        if (n == 3) {
            break;
        }
    }
}