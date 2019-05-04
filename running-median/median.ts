var fs = require('fs');
var array:number[]=[];

// Read the file, and pass it to your callback
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    
    processData(data.toString());
});

var processData = function(data:string):number{
    let temp:string[]=data.split("\n");
    for(let i = 1 ; i <= Number(temp[0]); i++){
        array.push(Number(temp[i]));
    }
    //input
    array.sort((a: number, b: number) => a-b);
    //logic
    for(let i = 0; i<array.length; i++){
        printMedian(array, i);
    }

    return 0;
}

var printMedian = function(a:number[], end:number){
    let items:number[]=a;
    let length = end+1;
    if(end==0){
        console.log(items[end]);
        return;
    }
    if(length%2==1){
        let mid = (length/2 | 0);
         console.log(items[mid])
    }else{
        let mid1 = length/2;
        let mid2 = mid1+1;
        console.log((items[mid1-1]+items[mid2-1])/2)
    }
}
