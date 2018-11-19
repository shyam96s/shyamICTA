const os=require('os');
var o1=os.freemem();
var o2=os.totalmem();
console.log(`Free mem:${o1}`);
console.log(`total mem:${o2}`);

