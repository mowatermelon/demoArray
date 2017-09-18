const http=require('http');
const queryString=require('querystring');

http.createServer(function(req,res){
    var obj='';
    //console.log(req);
    var i=1;
    //验证是否分段发送数据
    //验证数据发送格式是否正确
    //POST的数据的时候很大，数据会分多次发送
    //每触发一次data事件，代表一段数据到达
    req.on('data',function(data){
        //  原生写法   console.log('第%s次发送的数据是%s',i,data);
        //ES6 写法
        //console.log(`第${i++}次发送的数据是${data}\n\n\n`);  
        console.log(`第${i++}次发送\n\n\n`);        
        
        obj +=data;
    });
    //数据量比较小的时候  一次发送完毕，或者代表所有数据全部到达
    req.on('end',function(){
        obj =queryString.parse(obj);
        console.log(obj);
    });    
    
    
    res.end();
    
}).listen(1234);
