var gulp = require('gulp');

gulp.task('server', function () {
  var sources = [
    './dist/**/*.*'
  ];

  var server = gls.static('./', process.env.PORT, process.env.IP);
  server.start();

  // use gulp.watch to trigger server actions(notify, start or stop)
  return gulp.watch(sources, function (file) {
    server.notify.apply(server, [file]);
  });
});

gulp.task('serve'. ['watch', 'server']);