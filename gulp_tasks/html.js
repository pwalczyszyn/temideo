'use strict';

var gulp = require('gulp');
var gulpif = require('gulp-if');
var changed = require('gulp-changed');
var processhtml = require('gulp-processhtml');

gulp.task('html', function() {
	var debug = process.env.NODE_ENV !== 'production';
  var dest = `build/${debug ? 'development' : 'production'}/public`;

	// This one does nothing except moving the html file from src to www
	return gulp.src(['src/public/**/*.html', '!src/public/scripts/**'])
		.pipe(changed(dest))
		.pipe(processhtml({}))
		.pipe(gulp.dest(dest));
});
