const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        host: 'localhost',
        port: 5000,
        inline: true,
        overlay: { warnings: false, errors: true },
        proxy: {}
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
})

