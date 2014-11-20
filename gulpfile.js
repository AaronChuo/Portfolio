'use strict';

var gulp = require('gulp');

require('require-dir')('./task');

gulp.task('default', ['clean', 'server', 'watch'], function () {
  gulp.start('build');
});