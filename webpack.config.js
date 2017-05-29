const webpack = require('webpack');

var path = require('path');

module.exports = {
  /*entry: {
    main: [
      './app/entry.js',
      './app/Global.js'
    ]
  },*///'./app/entry.js',
  entry: './app/entry.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    //library: 'myClassName',
  },

	debug: true,
	devtool: "#eval-source-map",
	module: {
  	loaders: [
     { test: /\.css$/, loader: "style!css" },
     {
      test: /\.js$/,
      include: path.join(__dirname, 'includes'),
      loader: 'script'
    }
  	  /*{
  	    test: /\.jsx?$/,
  	    exclude: /(node_modules|bower_components)/,
  	    loader: 'babel'
  	  }*/
  	]
	},


  resolve: {
        modulesDirectories: ["node_modules",]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
};
// $ ./node_modules/.bin/webpack --progress --color --watch --display-error-details
//./node_modules/.bin/webpack
//https://webpack.github.io/docs/usage-with-gulp.html