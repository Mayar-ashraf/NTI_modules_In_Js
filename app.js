import * as math from "./math.js"
import greeting from "./greet.js"

var sum = math.add(2, 3);
console.log(`The sum of 2 and 3 is ${sum}`);

var diff = math.subtract(2,3);
console.log(`The difference between 2 and 3 is ${diff}`);

console.log(`PI = ${math.pi}`);

console.log(greeting("Mayar"));
