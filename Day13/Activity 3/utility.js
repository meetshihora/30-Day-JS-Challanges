const PI = 3.14159;
const E = 2.71828;

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function circleArea(radius) {
  return PI * square(radius);
}

function exponential(base, exp) {
  return Math.pow(base, exp);
}

module.exports = {
  PI,
  E,
  square,
  cube,
  circleArea,
  exponential
};
