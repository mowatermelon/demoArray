const ejs = require('ejs');
const fs = require('fs');


ejs.renderFile('temp/1.ejs' , {name:'mowatermelon'} , function(err,data){
    if(err){
        console.log('渲染失败');
    }else{
        var str = data;
        //请注意这个写入的文件夹路径一定要存在要不然会写入失败的。
        fs.writeFile('build/2.html',str,function(err,data){
            if(err){
                console.log('写入失败');
            }else{
                console.log('写入成功');
                console.log(str);
            }
        });
    }
});