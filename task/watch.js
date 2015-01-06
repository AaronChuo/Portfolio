'use strict';

var gulp = require('gulp');

gulp.task('watch', ['server'], function() {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/**', ['assets']);
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('.tmp/**', ['reload', 'styles-production']);
  //gulp.watch('src/scripts/**/*.js', ['scripts']);
  gulp.watch('src/scripts/**/*', ['react']);
  gulp.watch('src/scripts/libs/**/*.js', ['libs']);
  gulp.watch(['test/unit/*.js', 'src/**/*.js'], ['unit-test']);
  gulp.watch(['test/api/*.js'], ['api-test'])
  //gulp.watch('test/e2e/*.js', ['e2e-test']);
});
