const url = require('url');

const myUrl =  new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized url
console.log(myUrl.href);
console.log(myUrl.toString());

//host (root domain) gets port as well
console.log(myUrl.host);

//gets ports if its specified
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//serialized  query
console.log(myUrl.search);

//params object
console.log(myUrl.searchParams);

//ad params
myUrl.searchParams.append('key', 'value')
console.log(myUrl.searchParams);

//loop through params
myUrl.searchParams.forEach((value, name)=>{
  console.log(`${name}: ${value}`)
});



