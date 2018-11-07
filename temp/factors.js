function sum(a, b, c) {
    var array1 = [], array2 = [];
    var sum = 0,store;

    for (var x = a; x < c; x += a) {
        array1.push(x);
    }
    console.log(array1);
    for (var x = b; x < c; x += b) {
        array2.push(x);
    }
   console.log(array2);
    array1.forEach(function(element) {
        var store = array2.find(function(ele) {
           if(ele != element && !array1.includes(ele))   
             array1.push(ele);
        })
    })
    console.log(array1);

        
    for (var i = 0; i < array1.length; i++) {
        sum = sum + array1[i];
    }
        
        return sum;
    }
    console.log(sum(3, 5, 1000));