const fs =require('fs');

//readFile(文件名，回调函数)

//异步  多个操作可以同时进行
//同步  一次只能有一个操作
//服务器上异步操作比较多
//文件操作比较缓慢，一般是异步操作，所以必须要有回调函数
fs.readFile('server.js',function(err,data){
    if(err){
        console.log("读取失败");
    }else{
        console.log(data);//读取出来是纯粹的二进制数，前台接受后自动转化成我们能够理解的string类型内容
        console.log(data.toString());//转化成字符串再打印
        fs.writeFile('demo.js',data.toString(),function(err,data){
            if(err){
                console.log("写入失败");
            }else{
                console.log("写入成功");
            }
        });
    }
});

//writeFile(文件名，内容，回调函数)
//写入的文件内容会完全覆盖之前写的内容
//文件名注意添加引号