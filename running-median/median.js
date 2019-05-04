var fs = require('fs');
var array = [];
// Read the file, and pass it to your callback
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    processData(data.toString());
});
var processData = function (data) {
    var temp = data.split("\n");
    for (var i = 1; i <= Number(temp[0]); i++) {
        array.push(Number(temp[i]));
    }
    //input
    array.sort(function (a, b) { return a - b; });
    console.log(array);
    //logic
    for (var i = 0; i < array.length; i++) {
        printMedian(array, i);
    }
    return 0;
};
var printMedian = function (a, end) {
    var items = a;
    var length = end + 1;
    if (end == 0) {
        console.log(items[end]);
        return;
    }
    if (length % 2 == 1) {
        var mid = (length / 2 | 0);
        //  console.log("mid="+mid);
        console.log(items[mid]);
    }
    else {
        var mid1 = length / 2;
        var mid2 = mid1 + 1;
        // console.log("mid1:"+mid1+" mid2:"+mid2);
        console.log((items[mid1 - 1] + items[mid2 - 1]) / 2);
    }
};
