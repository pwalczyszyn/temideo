'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');

gulp.task('cloud', function() {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = `build/${debug ? 'development' : 'production'}/cloud`;

  return gulp.src('src/cloud/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});
