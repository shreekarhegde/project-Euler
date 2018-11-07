var array1 = [1, 3]
for (var i = 1; i < 10; i++) {
    x = array1[i] - array1[i - 1] + 1;
    y = array1[i] + x;
    array1.push(y);
}

z = [1,3,6,10,15,21,28];