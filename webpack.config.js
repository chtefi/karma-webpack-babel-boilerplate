module.exports = {
	entry: [
		'./src/app.js',
		'./test/app.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
  	loaders: [
    	{ test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
};
