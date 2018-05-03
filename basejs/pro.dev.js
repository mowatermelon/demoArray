let http = require('http');
let fs = require('fs');
let url = require('url');
let path = require('path');
let child_process = require('child_process');

let arguments = process.argv;//在终端中输入的所有指令的集合
let PORT = arguments[2]||4040; // 默认第三个参数是端口值

//添加MIME类型
// link css的时候，不能忘了 rel="stylesheet"
let MIME_TYPE = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml",
    "woff": "application/x-font-woff",
    "woff2": "application/x-font-woff"
};

let server = http.createServer(serverStatic);

function serverStatic(req,res){
    let filePath;
    if(req.url==="/"){
        filePath =  "iFormDesigner.html";
    } else{
        filePath = "./" + url.parse(req.url).pathname;
    }
    console.log('请求资源：',filePath);
    fs.exists(filePath,function(err){
        if(!err){
          send404(res);
        }else{
            let ext = path.extname(filePath);
            ext = ext?ext.slice(1) : 'unknown';
            let contentType = MIME_TYPE[ext] || "text/plain";
            fs.readFile(filePath,function(err,data){
                if(err){
                  send500(res);
                }else{
                    res.writeHead(200,{'content-type':contentType});
                    res.end(data);
                }
            });//fs.readfile
        }
    })//path.exists

}

function send500(res){
  res.end("<h1>500</h1><p>服务器内部错误，有人要扣奖金了，伤心.jpg</p>")
}

function send404(res){
  res.end("<h1>404</h1><p>页面没找到，可长点心吧，偷笑.jpg</p>")
}

function openUrl(url){
  url = 'http://localhost:' + PORT+'/' + url;
  let cmd;

  if (process.platform == 'win32') {
    //cmd = 'start "%Program Files%\\Internet Explorer\\iexplore.exe"';
    cmd = 'start "%Program Files (x86)%\\Google\\Chrome\\Application\\chrome.exe"';
  } else if (process.platform == 'linux') {
    cmd = 'xdg-open';
  } else if (process.platform == 'darwin') {
    cmd = 'open';
  }
  console.log(cmd,url);
  child_process.exec(`${cmd} ${url}`);
}

server.listen(PORT, () => {
  // 终端打印如下信息
  console.log('> Starting build server...');

  console.log('> Listening at ' + PORT +'\n');
  //默认打开的地址
  openUrl('index.html');
});
