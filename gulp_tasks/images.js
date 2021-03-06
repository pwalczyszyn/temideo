'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');
var imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = `build/${debug ? 'development' : 'production'}/img`;

  return gulp.src('src/public/img/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(imagemin()) // Optimize
    .pipe(gulp.dest(dest));
});
