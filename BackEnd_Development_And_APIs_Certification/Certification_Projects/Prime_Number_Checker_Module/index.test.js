const assert = require("node:assert/strict");
const primeChecker = require("./index");

assert.strictEqual(
    primeChecker.isPrime(2),
    true,
);

assert.strictEqual(
    primeChecker.isPrime(1),
    false,
);

assert.strictEqual(
    primeChecker.isPrime(7),
    true,
);

assert.strictEqual(
    primeChecker.isPrime(21),
    false,
);

