var f=require('fs');
f.readFile('Textdata.txt','utf8',function(err,data)
{
    if(err) console.log('error', err);
    else console.log("Data are:" , data);
});