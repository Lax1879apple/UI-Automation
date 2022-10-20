console.log("Hello World!");

let a = 4;
console.log(a);
console.log(a + "=" + typeof(a));

let b = 235.61;
console.log(b + "=" + typeof(b));
/**
 * In JavaScript, variables are loosely tied. It can hold any type of data. 
 * example;  var a=4; 
 * Where as in Java you expecility define data type with variable name as shown:  String str ="Hello"; or int num1=10;
 * 
 * In JavaScript there are ES5 and ES6 engines. Unitl ES5, variable are stored simply as: var a=5
 * Starting ES6, (let and const) are introduced.
 * 
 * 
 */

let String = "Laxman";
console.log(String + "=" + typeof(String));

let required = true;
console.log(typeof(required));
// There are two other data types; They are null and undefined javaScript data types.

var d = a + b;
console.log(d);

let f = 10;
//var d = 10;
let h = f + d;
console.log(h);

console.log("using not operator should reverse true to false = " + !required);