let gulp = require('gulp');
let browserSync = require('browser-sync');
let runSequence = require('run-sequence');

gulp.task('watch', ['browserSync'], function() {  // 我们可以在watch任务之前告知Gulp，先把browserSync和Sass任务执行了再说。
    gulp.watch('geoios/**/*.css', browserSync.reload);
    gulp.watch('geoios/*.html', browserSync.reload);
    gulp.watch('geoios/**/*.js', browserSync.reload);
    // Other watchers
});
gulp.task('browserSync', function() { // 浏览器热加载
    browserSync({
        server: {
            baseDir: './'
        },
    });
});
gulp.task('default', function (callback) {
    runSequence(['browserSync', 'watch'],
        callback
    );
});