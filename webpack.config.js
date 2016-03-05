"use strict";

var path = require('path'), join = path.join.bind(path, __dirname);

module.exports = {
    output: {
        path: join('.'),
        filename: 'samples.js',
        libraryTarget: 'umd',
        library: 'SubschemaTestSupport'

    },
    externals: {
        'Subschema': 'Subschema',
        'subschema': 'Subschema',
        'react': 'react',
        'react-dom': 'react-dom'
    },
    entry: {
        samples: join('samples/index.js')
    },
    module: {
        extensions: ['', '.js', '.jsx'],

        loaders: [

            {
                test: /\.jsx?$/,
                loader: 'babel'
            }
        ]
    }

};