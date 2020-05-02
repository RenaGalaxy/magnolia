const config = require('config')
const fs = require('fs')

fs.writeFileSync(`${__dirname}/build/config.json`, JSON.stringify(config))

module.exports = {
    mode: process.env.NODE_ENV == 'production' ? 'production' : 'development',
    devtool: process.env.NODE_ENV == 'production' ? false : 'source-map',
    entry: {
        'common.js': ['./src/common.js'],
        'index.js': ['./src/index.js']
    },
    output: {
        path: `${__dirname}/dist`,
        filename: '[name]'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: { insertAt: 'top' }
                    },
                    'css-loader'
                ]
            },

        ]
    },
    devServer: {
        https: true,
        disableHostCheck: true,
        host: '0.0.0.0'
    }
}