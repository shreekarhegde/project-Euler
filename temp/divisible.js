var i;
var array = [],array2 = [];
for(i = 1; i <= 20; i++){
    array.push(i);    
    }
    console.log(array);
let x=0;
    for(var j = 1; j < 1000000000; j++ ){
        let count=0;
        for(i = 0; i < array.length; i++ ){
        if(j % array[i] == 0){
            count++;
            if(count==array.length) {
            x=j;
            }

        }  
    }
    
    if(x>0) break;
 }
 console.log(x);
// for(var j=1;j<50;j++){
// let x=array.filter(elem=>{
//     console.log(elem);
    
// if(j %elem==0) return j;
// });
// console.log(x);

// }

//console.log(x);
    

