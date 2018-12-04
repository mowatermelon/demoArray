// 创建一个Browsersync实例
let bs = require('browser-sync').create();

// 监听HTML更改事件并重新加载
bs.watch('*.html').on('change', bs.reload);

// 提供一个回调来捕获所有事件的CSS
// files - 然后筛选的'change'和重载所有
// css文件在页面上
bs.watch('*.css', function (event, file) {
    if (event === 'change') {
        bs.reload('*.css');
    }
});
bs.watch('*.js', function (event, file) {
    if (event === 'change') {
        bs.reload('*.js');
    }
});
// 现在初始化的Browsersync服务器
bs.init({
    server: './'
});
