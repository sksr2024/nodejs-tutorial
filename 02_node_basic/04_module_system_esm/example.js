const calc = require('./calc');
const {plus, minus} = calc;

const plusResult = plus(1, 2);
const minusResult = minus(1, 2);

console.log(plusResult);
console.log(minusResult);