// for production
const webpack = require('webpack');

var path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");

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
	devtool: "#cheap-module-source-map",
	module: {
  	loaders: [
     { test: /\.css$/, loader: "style!css" },
     {
      test: /\.js$/,
      include: path.join(__dirname, 'includes'),
      loader: 'script'
    },
    // image loader, file loader
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file-loader?context=src/images&name=images/[path][name].[ext]', {
          loader: 'image-webpack-loader',
          query: {
            mozjpeg: {
              progressive: true,
            },
            gifsicle: {
              interlaced: false,
            },
            optipng: {
              optimizationLevel: 4,
            },
            pngquant: {
              quality: '75-90',
              speed: 3,
            },
          },
        }],
        exclude: /node_modules/,
        include: __dirname,
      },
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
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        //new webpack.optimize.CommonsChunkPlugin('common'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new CompressionPlugin({
              asset: "[path].gz[query]",
              algorithm: "gzip",
              test: /\.js$|\.css$|\.html$/,
              threshold: 10240,
              minRatio: 0.8
        }),
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