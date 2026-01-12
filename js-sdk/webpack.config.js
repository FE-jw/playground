const path = require('path');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    mode: isProd ? 'production' : 'development',
    entry: { main: ['./src/index.js'] },
    output: {
      path: path.resolve(__dirname, 'SDK'),
      filename: isProd ? 'index.min.js' : 'index.js',
      library: 'TestSDK',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      libraryExport: 'TestSDK'
    },
    devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
    /*
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env']],
              // 항상 private 필드를 변환해서 출력 코드에서 제거
              plugins: [
                ['@babel/plugin-transform-private-methods', { loose: true }],
                ['@babel/plugin-transform-class-properties', { loose: true }]
              ]
            }
          }
        }
      ]
    },
    */
    optimization: { minimize: isProd }
  };
};
