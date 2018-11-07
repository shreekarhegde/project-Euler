let length = [];
let result = [];
for(var i = 1; i < 1000; i++){
    let quotient;
    quotient = 1 / i;
    string = quotient.toString();
    for(var j = 2; j < string.length; j++){
        if(result.indexOf(+string.charAt(j)) == -1){
        result.push(+string.charAt(j));
        console.log(result);
        length.push(result.length);
        //console.log(length);
        console.log(i);
        }
}
}
//console.log(length);
console.log(length.indexOf(Math.max(...length)));
