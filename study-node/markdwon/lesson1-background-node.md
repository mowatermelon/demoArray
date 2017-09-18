# 1 历史
`javascript`是基于前台的，而且后台开发目前也有多种选择，如`php`，`java`，`Python`等，在这个前提下，`nodejs`产生了。

# 2 优势
`nodejs`的性能比传统的语言高出很多，即`nodejs`在同等的情况下，`nodejs`的处理能力要优出很多，举个栗子，即`nodejs`一台服务器处理的能力，需要多台`php`服务器进行处理。

`nodejs`比传统后台相比和前台的`js`配合的特别方便。

前端人员学习`nodejs`成本更低。

最好下载LTS版本，稳定版本，不要下最新版本
# 3 现状
nodejs主要是用于后台

# 4 前景
- 模块、自定义
- express、es6

https://nodejs.org/ 官网地址

wewfsfds
nodeJS --服务器

http --协议

GET数据解析（最多32k）
- 自己切，三层split
- 利用一个indexof判断之后，使用querystring模块的parse方法自动解析传递的数据
- 利用url模块的parse方法，传递参数为true，将req.url中的数据自动解析传递的数据存在req.url.parse(true).query中。


POST
数据比GET数据大得多，所以文件会分段发送，每次发送请求都会触发data事件，请求结束之后会触发end事件

由于req.on('data',callback)是异步的，所以这个时候请求pathname数据，一定要写在对应的callback中要不然页面取不到pathname。

在cmd中输入cls可以清空内容