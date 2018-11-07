let array1 = [];
let array2 = [];
var i;
var sum = 0; total = 0;var sqrTotal;
for(i = 0; i <= 100; i++ ){
    array1.push(i);
    total = total + array1[i];
}
sqrTotal = total * total;
//console.log(array1,total);

array1.forEach(function(element){
 sum = sum + element * element;
})
//console.log(sum);

result = sqrTotal - sum;
console.log(result);

