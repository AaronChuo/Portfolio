'use strict';

var gulp = require('gulp');
var del = require('del');
var $ = require('gulp-load-plugins')({
  pattern: 'gulp-*'
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('styles', function() {
  var timestamp = new Date().getTime();

  return gulp.src(['src/styles/sass/**/*.scss'])
    .pipe($.compass({
      css: 'css',
      sass: 'sass',
      image: 'images'
    }))
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.csso())
    .pipe($.rename({
      suffix: '.min',
      extname: '.css?ver=' + timestamp
    }))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: Sass Preprocessor',
      message: 'Compiled'
    }));
});

gulp.task('scripts', function() {
  return gulp.src('src/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .on('error', handleError)
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: JavaScript Optimize',
      message: 'Completed'
    }));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('.tmp'))
    .pipe(gulp.dest('dist'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: HTML Build',
      message: 'Updated'
    }));
})

gulp.task('build', ['html', 'styles', 'scripts']);

gulp.task('clean', function(done) {
  del([
    '.tmp',
    'dist'
  ], done);
});