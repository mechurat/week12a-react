var webpack = require('webpack');



module.exports = {

	entry : [

		'./src/index.js'

	],

	output: {

		path: __dirname + '/public/',

		filename: 'bundle.js'

	},

  resolve: {

    extensions: ['', '.js', '.jsx'],

  },

	module: {

		loaders: [

			{

				test: /\.js?$/,

				exclude: [/node_modules/, /.+\.config.js/],

				loaders: ['babel-loader']

			}

		]

	}

};