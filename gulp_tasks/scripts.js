var gulp = require('gulp');
var jspm = require('jspm');

gulp.task('scripts', function(cb) {
  var debug = process.env.NODE_ENV !== 'production';
  var dest = `build/${debug ? 'development' : 'production'}/public/scripts/home.js`;

  // https://github.com/jspm/jspm-cli/blob/master/docs/api.md
  jspm.bundleSFX('src/public/scripts/home', dest,
    {
      mangle: !debug,
      minify: !debug,
      sourceMaps: debug
    }).then(function() {
      cb();
    });
});
