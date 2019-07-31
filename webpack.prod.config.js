const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new BundleAnalyzerPlugin()
    ]
})
