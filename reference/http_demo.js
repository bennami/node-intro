const http  = require('http');

http.createServer((req, res)=>{
  res.write('heya');
  res.end()

}).listen(9000, ()=>  console.log(' server running'))