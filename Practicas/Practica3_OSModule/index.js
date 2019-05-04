const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('Free Memory: '+ (os.freemem/1000000).toFixed(2) + 'Mb');
console.log('Total Memory: '+ (os.totalmem/1000000).toFixed(2) + 'Mb');