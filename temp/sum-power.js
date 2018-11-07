let x = 1000;
let y = Math.pow(2,x);
console.log(y);
let store = y;
let sum = 0,remainder, quotient;
for(var i = 0; i < 1000000; i++){
quotient = Math.floor(y / 10);
//console.log(quotient);
remainder  = y % 10;
//console.log(remainder);
sum = sum + remainder;
//console.log(sum);
y = quotient;
}
sum = sum + quotient;
console.log(sum);