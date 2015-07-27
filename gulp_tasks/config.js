'use strict';

var gulp = require('gulp');
var changed = require('gulp-changed');

gulp.task('config', function() {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = debug ? 'build/development/config' : 'build/production/config';

  return gulp.src('src/config/**')
    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});
