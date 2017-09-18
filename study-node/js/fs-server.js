const http=require('http');
const fs=require('fs');

//req form ajax jsonp 等等请求对于后台来说处理情况一样，都是通过http协议过来
//后台主要是有两种不同的方式
//一种是  POST 数据不在url中（eg 淘宝 url中没有参数信息）
//一种是GET,数据在url中（eg 百度   url中带了很多参数信息）
//GET请求会默认将input中的值通过name=value的形式进行拼接
//比如name为usrname的文本input和name为pwd的密码input，
//默认以get形式提交的话会在请求路径后，添加?usrname={usrname的输入值}&pwd={pwd的输入值}
var server =http.createServer(function(req,res){
    console.log(req.url);
    const _url="../html/"+req.url;
    //readFile是异步函数，所以这个处理会在下面的res.end()之后再执行，所以res.end()一定要在write之后处理
    fs.readFile(_url,function(err,data){
        if(err){
            res.write("404");
            res.end();  
        }else{
            res.write(data);//读取出来是纯粹的二进制数
            res.end();
        }
    });

    
    
});
server.listen(1234);
