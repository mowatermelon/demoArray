const jade = require('jade');
const fs =require('fs');

var str = jade.renderFile('./temp/1.jade',{pretty:true});
fs.writeFile('build/2.html',str,function(err,data){
    if(err){
        console.log('写入失败');
    }else{
        console.log('写入成功');
        console.log(str);
    }
});
