var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'babel-polyfill',
		'./src/app/main',
		'webpack-dev-server/client?http://localhost:8000'
   	],
	output: {
		publicPath: '/public/',
		filename: 'main.js'
	},
	debug: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src/app'),
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(css)$/,
				loader: 'style!css'
			}
		],
	},
	devServer: {
		contentBase: './src/app'
   	},
	resolve: {
		extensions: ['', '.js'],
		modulesDirectories: ['src/app', 'node_modules'],
		root: __dirname
	}
};
