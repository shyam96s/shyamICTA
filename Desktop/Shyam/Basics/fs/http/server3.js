const http=require('http');
const fs=require('fs');
var data=fs.readFileSync('Friends.txt','utf8');
const server=http.createServer(function(req,res){
    
    if(req.url == '/'){
        res.write("Hello world");
        res.end();
        
    }
    if(req.url == '/users'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    if(req.url == '/friends'){
        res.write(data);
        res.end();
    }
});
server.listen(3003);
console.log("Listening on 3003...");