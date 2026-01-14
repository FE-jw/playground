const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist')
      },
      compress: true,
      port: 3000,
      open: true, // 서버 실행 시 브라우저 자동 실행
      hot: true, // Hot Module Replacement 활성화
      watchFiles: ['src/**/*'] // src 폴더 내 모든 파일 변경 감지 (html 포함)
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html' // src/index.html을 템플릿으로 사용
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
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
