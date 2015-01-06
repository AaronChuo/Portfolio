'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var del = require('del');
var $ = require('gulp-load-plugins')({
  pattern: 'gulp-*'
});

function handleError(err) {
  console.error(err.toString());
  this.emit('end');
}

gulp.task('styles-production', function() {
  return gulp.src(['.tmp/styles/**/*.min.css'])
    .pipe($.csso())
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size())
    .pipe($.notify({ 
      title: 'Task: CSS Optimize',
      message: 'Completed'
    }));
});

gulp.task('styles', function() {
  return gulp.src(['src/styles/**/*.scss'])
    .pipe($.compass({
      css: './.tmp/styles',
      sass: './src/styles'
    }))
    .on('error', handleError)
    .pipe($.autoprefixer('last 1 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size())
    .pipe($.notify({ 
      title: 'Task: Sass Preprocessor',
      message: 'Compiled'
    }));
});

gulp.task('scripts', function() {
  return gulp.src(['src/scripts/**/*.js','!src/scripts/libs/**/*.js','!src/scripts/app.js'])
    .pipe($.react())
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.uglify())
    .on('error', handleError)
    .pipe(gulp.dest('dist/scripts'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: JavaScript Optimize',
      message: 'Completed'
    }));
});

gulp.task('react', function() {
  return browserify({
      entries: ['./src/scripts/app.js']
    })
    .transform('reactify')
    .bundle({debug: true})
    .on('error', function( err ) {
      console.log('[錯誤]', err );
      this.end();
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./.tmp/scripts'))
    .pipe(gulp.dest('./dist/scripts'))
    .pipe($.notify({
      title: 'Task: JSX Compile',
      message: 'Compiled'
    }));
});

gulp.task('libs', function() {
  return gulp.src('src/scripts/libs/**/*.js')
    .pipe(gulp.dest('.tmp/scripts/libs'))
    .pipe(gulp.dest('dist/scripts/libs'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: Library Build',
      message: 'Builded'
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
});

gulp.task('assets', function() {
  return gulp.src('src/assets/**')
    .pipe(gulp.dest('.tmp/assets'))
    .pipe(gulp.dest('dist/assets'))
    .pipe($.size())
    .pipe($.notify({
      title: 'Task: Assets Build',
      message: 'Updated'
    }));
});

gulp.task('build', ['html', 'assets', 'styles', 'react', 'libs']);

gulp.task('clean', function(done) {
  del([
    '.tmp',
    'dist'
  ], done);
});
