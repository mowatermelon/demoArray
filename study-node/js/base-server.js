const http=require('http');

var server =http.createServer(function(req,res){
    console.log(req.url);
    if(req.url==="/"){
        res.write('1.html'); 
    }else{
        res.write(req.url);        
    }
    res.end();
    
});
server.listen(1234);
//监听--等着  服务器一直要开启
//一定要启动端口监听
//端口共存和端口转发
//只有谷歌会自动请求favicon.ico文件
//req  发送的请求内容
//res  返回的内容
//http  组成太复杂，熟悉比较常用的模块就好
//file system    fs