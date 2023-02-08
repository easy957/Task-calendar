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
        //asyncWebAssembly: true,
        //buildHttp: true,
        //layers: true,
        //lazyCompilation: true,
        //outputModule: true,
        //syncWebAssembly: true,
        topLevelAwait: true,
      },
};