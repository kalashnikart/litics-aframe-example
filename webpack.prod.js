module.exports = {
  mode: 'production',
  entry: {
    app: './src/aframe/index.js'
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    library: 'analytics-logger',
    libraryTarget: 'umd',
    filename: 'analytics-logger.js',
    clean: true
  }
};
