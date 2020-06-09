const http = require('http');
const path = require('path');
const fs = require('fs');

//create server inside variable, this takes a function with two params: req and res
const server = http.createServer((req,res)=>{
//   if(req.url === '/'){
//     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
//         if(err) throw err
//         res.writeHead(200, {'Content-type': 'text/html'});
//         res.end(content);
//       })
   
//   }

//   if(req.url === '/about'){
//     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
//         if(err) throw err
//         res.writeHead(200, {'Content-type': 'text/html'});
//         res.end(content);
//       })
   
//   }

//   if(req.url === '/api/users'){
//     const users = [
//       {name: 'bob', age: '45'},
//       {name: 'de  bouwer', age: '5'}
//     ];
//     res.writeHead(200, {'content-type': 'application/json'});
//     res.end(JSON.stringify(users));
   
//   }
// console.log(req.url)


// we want to make  filepath dynamic, and not the above

let filePath = path.join(
  __dirname, 
  'public',
  req.url === '/' ? 'index.html' : req.url
  );
console.log(filePath)
 
  //extension of file
  let extname = path.extname(filePath);
  console.log(extname)

  //initial content type
  let contentType = 'text/html';

  //check ext and set content type dynamically
  switch(extname){
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

    // Check if contentType is text/html but no .html file extension
    if (contentType == "text/html" && extname == "") filePath += ".html";

  //read the file
  fs.readFile(filePath, (err, content)=>{
    if(err){
      if(err.code  == 'ENOENT'){
        //page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err,content)=>{
          res.writeHead(404, {'content-type': 'text/html'});
          res.end(content, 'utf8');
        });
      }else{
        res.writeHead(500);
        res.end(`server error:${err.code}`);
      }
    }else{

      res.writeHead(200, {'Content-Type': contentType});
      res.end(content,'utf8');
    }

  });

});


//we put the port in a var, first it will look for the environment variable, if not found, t will run on port 5000
const PORT = process.env.PORT  || 5000

// to connect server, we listen to a port
server.listen(PORT, ()=>  console.log(`server running on ${PORT}`));