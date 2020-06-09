const os = require('os');

//Platform, on mac its darwin
console.log(os.platform());

//CPU architecture
console.log(os.arch());

//CPU core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

console.log(os.userInfo());
console.log(os.totalmem());

console.log(os.uptime());

