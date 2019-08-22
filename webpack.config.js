const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'client', 'index.js'),
  resolve: { extensions: ['.jsx', '.js'] },
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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    // publicPath: 'dist',
    contentBase: 'dist',
    // port: 8080,
    // if i can't get / send back to root;
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
};
