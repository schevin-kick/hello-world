var path = require('path');

var config = {
    devtool:'inline-source-map',
    entry: [ 
        path.resolve(__dirname, './index.js')
    ],

    output: {
        path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
        publicPath: '/dist',
        filename: 'bundle.js'
    },    

    devServer: {
        inline: true,
        port:8080
    },

    module: {
        rules: [
            { test: /\.css$/,use: [ 'style-loader', 'css-loader' ]},
          {test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',},
          { test: /\.scss$/, loaders:['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']}
         ]
      }
}

module.exports = config;