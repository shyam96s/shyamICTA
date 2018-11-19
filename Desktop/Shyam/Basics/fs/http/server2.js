const ht=require('http');
const server=ht.createServer(function(req,res){
    res.write('Hello world'); // Write a response to client
    res.end(); // Response ends
});
server.listen(3000);
console.log("Listening to 3000....");