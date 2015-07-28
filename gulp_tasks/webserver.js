var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('webserver', function() {
  gulp.src(['src/public', 'build/development/public'])
    .pipe(server({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});
