'use strict';

var gulp = require('gulp');

gulp.task('watch', ['server'], function() {
  gulp.watch('src/**/*.html', ['html', 'reload']);
  gulp.watch('src/styles/sass/**/*.scss', ['styles']);
  gulp.watch('.tmp/**/*.css', ['reload']);
  gulp.watch('src/scripts/**/*.js', ['scripts', 'reload']);
  gulp.watch(['test/unit/*.js', 'src/**/*.js'], ['unit-test']);
  //gulp.watch('test/e2e/*.js', ['e2e-test']);
});