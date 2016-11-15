/*
 * @Author: yafee
 * @Date:   2016-11-15 10:37:18
 * @Last Modified by:   yafee
 * @Last Modified time: 2016-11-15 15:32:06
 */

var gulp = require('gulp'),
  minifycss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  autoprefixer = require('gulp-autoprefixer'),
  imagemin = require('gulp-imagemin'),
  jshint = require('gulp-jshint'),
  cache = require('gulp-cache');
gulp.task('lint', function() {
  gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});
gulp.task('minifyjs', function() {
  gulp.src('js/*.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('bulid/js'))
});
gulp.task('minifycss', function() {
    gulp.src('css/*.css')
      .pipe(autoprefixer())
      .pipe(concat('style.css'))
      .pipe(minifycss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('bulid/css'))
  })
  gulp.task('minifyimgs', function() {
    gulp.src('imgs/*.{png,jpg,gif,ico}')
      .pipe(cache(imagemin()))
      .pipe(gulp.dest('bulid/imgs'))
  })
gulp.task('default', ['lint','minifyjs', 'minifycss','minifyimgs']);
