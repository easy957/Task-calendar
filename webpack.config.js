const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js',
        test: './src/test/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },

    experiments: {
        topLevelAwait: true
      },
};