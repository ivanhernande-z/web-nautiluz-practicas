var path = require('path')
module.exports = {
	publicPath: '',
	lintOnSave: false,
	configureWebpack: {
		resolve: {
			alias: {
				src: path.resolve(__dirname, 'src')
			}
		},
		devServer: {
			watchOptions: {
				ignored: /node_modules/,
				aggregateTimeout: 1000,
				poll: 500,
			},
		}
	}
}