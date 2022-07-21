module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
	devServer: {
		// open: false,
		// disableHostCheck: true,
		port: 9876,
		proxy: {
			'/system': {
				target: 'http://localhost:9200',
				changeOrigin: true,
				pathRewrite: {
					'^/system': ''
				}
			}
		}
	}
};
