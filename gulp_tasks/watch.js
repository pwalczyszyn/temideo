'use strict';

var gulp = require('gulp');

gulp.task('watch', function() {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = debug ? 'build/development' : 'build/production';

	gulp.watch('src/cloud/**', ['cloud']);
	gulp.watch('src/public/**/*.html', ['html']);
	gulp.watch('src/public/scripts/**/*.js', ['scripts']);

	// gulp.watch('src/public/img/**', ['images']);
	// gulp.watch('src/public/scss/**/*.scss', ['styles']);

	// Watch .js files
	// global.scripts('home.js', true);
	// global.scripts('dashboard.js', true);
});
