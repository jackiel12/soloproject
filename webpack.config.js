const path = require ('path');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {extensions: ['.jsx', '.js']},
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ],
    },
    output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js", 
    },
    devServer: {
      contentBase: 'dist'
    }
  };