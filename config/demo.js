const path = require('path');
const base = require('./base');
const htmlPlugin = require('html-webpack-plugin');

base.mode = 'development'; // production
base.entry = {
    common: ['react'],
    index: path.join(__dirname, '../example/index.js')
};
base.output = {
    path: path.join(__dirname, '../demo'),
    filename: '[name].js',
    chunkFilename: '[name].bundle.js'
};
base.optimization = {
    splitChunks: {
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: "common",
                chunks: "all"
            }
        }
    }
};
base.devtool = 'eval-source-map',
base.devServer = {
    contentBase: '../demo',
    inline: true,
    historyApiFallback: true
};

base.plugins.unshift(new htmlPlugin({
    template: 'example/index.html',
    chunks: ['common', 'index'],
    chunksSortMode: 'manual',
    filename: 'index.html'
}));

module.exports = base;
