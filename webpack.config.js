"use strict";

var path = require('path'), join = path.join.bind(path, __dirname);

module.exports = {
    output: {
        path: join('.'),
        filename: 'samples.js',
        libraryTarget: 'umd',
        library: 'SubschemaTestSupport'

    },
    entry: {
        samples: join('samples/index.js')
    },
    module: {
        extensions: ['', '.js', '.jsx'],
        loaders: [
            {
                test: /.*-setup.jsx?$/,
                loader: '!!raw!',
                include: [
                    join('samples')
                ]
            }
        ]
    }

};