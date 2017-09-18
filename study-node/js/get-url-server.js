const http=require('http');

//专门用来解析url地址这块传值相关处理
const urlib=require('url');

http.createServer(function(req,res){
    var obj =urlib.parse(req.url,true);
    //node自身提供url的处理
    var _url = obj.pathname;
    var data=obj.query;

    //res.write(_url , data , req.method); 
    //注意打印json数据用逗号相隔
    console.log(_url,data,req.method);
    
    res.end();
    
}).listen(1234);
