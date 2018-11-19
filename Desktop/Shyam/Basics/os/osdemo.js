const ob=require("os");
var obj1=ob.totalmem();
var obj2=ob.freemem();
console.log("total memory is "+obj1);
console.log("free mem is "+obj2);
