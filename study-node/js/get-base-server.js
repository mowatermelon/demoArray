const http=require('http');

http.createServer(function(req,res){
    var data ={};
    
    //eg：http://localhost:1234/?name=123&pwd=qwe    
    //arr[0]=> 地址     /
    //arr[1]=> 数据     name=123&pwd=qwe
    var _url;
    if(req.url.indexOf('&')>-1){
        
        var arr =req.url.split('?');
        _url = arr[0];
        var arr2 =arr[1].split('&');
        //arr2[0]=> 名字的数据     name=123
        //arr2[1]=> 密码的数据     pwd=qwe
        for(var i=0;i<arr2.length;i++){
            var arr3 = arr2[i].split('=');
            data[arr3[0]] = arr3[1];
            //第一遍
            //arr3[0]=> 名字的值     name
            //arr3[1]=> 名字的值     123
            //第二遍
            //arr3[0]=> 名字的值     pwd
            //arr3[1]=> 名字的值     qwe        
            
        }
    }else{
        _url = req.url;
    }

    res.write(_url , data , req.method); 
    //注意打印json数据用逗号相隔
    console.log(_url,data,req.method);
    
    res.end();
    
}).listen(1234);
