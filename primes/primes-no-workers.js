'use strict';

const generatePrimes = require('./generate-primes');

const min = 2;
const max = 1e7;
const primes = generatePrimes(min, max);
console.log(primes.join('\n'));
