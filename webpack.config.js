const path = require('path');

module.exports = {
	entry: {
		app: './src/index.ts'
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.ts', '.js', '.json']
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: 'ts-loader'}
		]
	}
}