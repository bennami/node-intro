const path = require('path');

// gives root/base file name
console.log(path.basename(__filename));

// fives dir name
console.log(path.dirname(__filename));

// file extention
console.log(path.extname(__filename));

//create path objext, gives an object wiith root, dit, base, ext and name
console.log(path.parse(__filename));


//concatonate paths, for when u want to join a path with the current dir.
//join works well when u have different delimeters in different OS's, forward slashes vs backward slashes and so  on
console.log(path.join(__dirname, 'test','hello.html'));