module.exports = {
	entry: 'src/scripts/entry.js',
	output: {
		path: ...,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.css$/, loader: 'style!css'}
		]
	}
}
