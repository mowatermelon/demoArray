const http=require('http');
const fs=require('fs');
const queryString=require('querystring');
const urlLib=require('url');

var server = http.createServer((req,res) => {
    
    //GET   数据
    //POST   数据
    //文件对应跳转
    //只读不写的数据建议函数类型设置为const
    var _url ='';
    var locals = window.localStorage;
    locals.setItem('usrs','');
    var usrs = {};
    var obj =urlLib.parse(req.url,true);
    if(req.method==='GET'){
        //node自身提供url的处理
        _url = obj.pathname;
        var data=obj.query;
    
        //res.write(_url , data , req.method); 
        //注意打印json数据用逗号相隔
        console.log(_url,data,req.method);
        //区分是接口请求，还是文件请求
        if(_url==='/user'){
            console.log(data.act);
            switch(data.act){
                case 'reg':
                    usrs = JSON.parse(locals.getItem('usrs'));
                    //检查用户名是否存在
                    if(usrs[data.user]){
                        console.log("此用户已存在");
                        res.write('{"ok":false,"msg":"此用户已存在"}');
                    }else{
                        //插入user数据
                        usrs[data.user] =  data.pwd;
                        locals.setItem('usrs',JSON.stringify(usrs));
                        console.log(JSON.parse(locals.getItem('usrs'))); 
                        console.log("注册成功");                        
                        res.write('{"ok":true,"msg":"注册成功"}');
                    }
                    break;
                case 'login':
                    console.log(usrs); 
                    if(usrs[data.user]==null){
                        console.log("此用户不存在");                                                
                        res.write('{"ok":false,"msg":"此用户不存在"}');
                    }else if(usrs[data.user]==data.pwd){
                        console.log("用户名或密码有误");                                                
                        
                        res.write('{"ok":true,"msg":"用户名或密码有误"}');
                    } else{
                        console.log("登录成功");                                                
                        
                        res.write('{"ok":true,"msg":"登录成功"}');
                    }               
                    break;
                default:
                    console.log("未知的act");   
                    res.write('{"ok":false,"msg":"未知的act"}');
                    break;                                        
            }
            res.end();
        }else{
            const file_name="../html"+_url;
            
            fs.readFile(file_name,function(err,data){
                if(err){
                    res.write("404");
                }else{
                    res.write(data);//读取出来是纯粹的二进制数 
                }
                res.end();
            });   
        }   
    }
    else{
        var i=1;
        var postdata ='';
        req.on('data',(data) => {
            console.log(`第${i++}次发送`);        
            postdata +=data;
            if(obj.pathname.length>0){
                _url = obj.pathname;
                console.log(obj.pathname);              
            }
        });
        req.on('end',() => {
            postdata =queryString.parse(postdata);
            console.log(postdata);
            if(_url==='/user'){

            }else{
                const file_name="../html"+_url+".html";
                
                fs.readFile(file_name,(err,data) =>{
                    if(err){
                        res.write("404");
                    }else{
                        res.write(data);//读取出来是纯粹的二进制数 
                    }
                    res.end();
                });   
            }
                     
        }); 
 
    }



}).listen(1234);
