let a = 5
let b = 10

// Functions without arrows

function myFunct1 (a, b) {return a + b}
console.log(myFunct1(a,b));

function myFunct2 (a, b) {return a - b}
console.log(myFunct2(a,b));

function myFunct3 (a, b) {return a * b}
console.log(myFunct3(a,b));

function myFunct4 (a, b) {return a / b}
console.log(myFunct4(a,b));

// Functions with arrows

const aPlusB = (a,b) => a + b
console.log(aPlusB(a,b));

const aMinB = (a,b) => a - b
console.log(aMinB(a,b));

const aMulB = (a,b) => a * b
console.log(aMulB(a,b));

const aDivB = (a,b) => a / b
console.log(aDivB(a,b));