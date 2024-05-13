let x = 5;
let equalTo = (x == "5");
let equalEqual = (x === "5");
let notEqual = (x != 8);
let notEqualEqual = (x !== 8);
let greaterThan = x > 5;
let greaterThanOrEqual = x >= 5;

//logical operators
let andOperator = true && true; //true
andOperator = true && false; //false
andOperator = false && true; //false
andOperator = false && false; //false

let andOp = (x > 3) && (x < 8);
// andOp = true && true
// andOp = true

let orOperator = true && true; //true
orOperator = true && false; //true
orOperator = false && true; //true
orOperator = false && false; //false

let orOp = (x > 3) && (x < 5);
// orOp = true || false
// orOp = true

let notOperator = !(true); //false
notOperator = !(false); //true

let z = 9;
// even / 3
let checkCondition = (z % 2 == 0) && (z % 3 == 0 );
// checkCondition = false && true;
// checkCondition = false;

// odd + not divided by 2
let check = !( z % 2 == 0) && !( z % 2 == 0);
// check = ( z % 2 == 1) && !( z % 2 == 0);
// check = ( z % 2 != 0) && ( z % 2 != 0);


document.getElementById("answer").innerHTML = equalTo;