var webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: './public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: [/node_modules/, '/public/'],
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ['react-html-attrs', 'transform-decorators-legacy']
				}
			}
		]
	}
};