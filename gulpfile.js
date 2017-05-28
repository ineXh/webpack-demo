var gulp = require('gulp');
//var webpack = require('webpack-stream');
var webpack = require('webpack');
var gutil = require('gulp-util');
var webpackConfig = require('./webpack.config.js');
gulp.task('default', function() {
/*  return gulp.src('./app/entry.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('dist/'));*/
  //return webpack()
  //webpack();
  //return webpack(webpackConfig);
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(
        // configuration
    	webpackConfig    
    , function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});