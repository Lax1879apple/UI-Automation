// let n = 5;
// // External loop
// for (let i = 1; i <= n; i++) {
//     // printing spaces
//     for (let j = 1; j <= n - i; j++) {
//         console.log(' ')
//     }
//     // printing stars
//     for (let k = 0; k < 2 * i - 1; k++) {
//         console.log('*')
//     }
//     console.log();
// }
let row = 5;
for (let i = 0; i < row; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("* ");
    }
    console.log();
}