const utility = require('./utility');  // Import the entire module as an object

console.log(`PI: ${utility.PI}`);
console.log(`E: ${utility.E}`);

console.log(`Square of 4: ${utility.square(4)}`);
console.log(`Cube of 3: ${utility.cube(3)}`);
console.log(`Area of a circle with radius 5: ${utility.circleArea(5)}`);
console.log(`2 to the power of 3: ${utility.exponential(2, 3)}`);
