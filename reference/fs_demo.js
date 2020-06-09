const fs = require ('fs');
const path = require ('path');

/// when testing methods! make sure not to run them simultaneously, comment one out  to prevent strange errors!


  //create folder, by default fs methods a re asynchronous
  //params are folder u wanna create and second is an object with options, third is an error object

  // fs.mkdir(path.join(__dirname, '/test'),{}, err => {
  //   if (err)  throw err;
  //   console.log('folder created ..')
  // });


  // create write into file

  // fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),'wassup world', err => {
  //   if (err)  throw err;
  //   console.log('created file and written to ..');

  ////file append will add text to file, in callback

  //fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),' space world', err => {
  //       if (err)  throw err;
  //       console.log('file written to ..');
  //     });
  // });

  
  //  //Read file

  //  fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err,data) => {
  //   if (err)  throw err;
  //   console.log(data);
  // });


  //Rename file

  // fs.rename(path.join(__dirname, '/test', 'hello.txt'),path.join(__dirname, '/test', 'helloWorld.txt'), (err) => {
  //   if (err)  throw err;
  //   console.log('file renamed...');
  // });







