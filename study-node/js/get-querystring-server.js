const http=require('http');
//专门用来解析键名=键值&键名=键值..格式的数据，自动转化成json{'键名':'键值',....}
const queryString=require('querystring');

http.createServer(function(req,res){
    var data ={};
    
    //eg：http://localhost:1234/?name=123&pwd=qwe    
    //arr[0]=> 地址     /
    //arr[1]=> 数据     name=123&pwd=qwe
    var _url;
    if(req.url.indexOf('&')>-1){
        //node自身提供的字符串查询分割
        var arr =req.url.split('?');
        _url = arr[0];
        data=queryString.parse(arr[1]);

    }else{
        _url = req.url;
    }

    //res.write(_url , data , req.method); 
    //注意打印json数据用逗号相隔
    console.log(_url,data,req.method);
    
    res.end();
    
}).listen(1234);
