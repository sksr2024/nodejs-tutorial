// const calc = require('./calc');
import minus, { plus } from './calc.mjs';

const plusResult = plus(1, 2);
const minusResult = minus(1, 2);

console.log(plusResult);
console.log(minusResult);