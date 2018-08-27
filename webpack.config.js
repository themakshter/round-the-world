var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'round-the-world-game.js'
  },
  devtool: 'source-map'
};
