var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('scripts', function(cb) {
  // https://github.com/jspm/jspm-cli/blob/master/docs/api.md
  jspm.bundleSFX(
    'src/public/scripts/home',
    'build/development/public/scripts/home.js',
    {
      mangle: false,
      minify: true,
      sourceMaps: false
    }).then(function() {
      cb();
    });
});
