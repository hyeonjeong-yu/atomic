const path = require('path');

module.exports = {
  entry: './src/index.js', // 진입점(entry point) 설정
  output: {
    path: path.resolve(__dirname, 'dist'), // 번들된 파일의 출력 디렉토리
    filename: 'bundle.js', // 출력 파일 이름
  },
  module: {
    rules: [
      // 다양한 로더 설정
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // SVG 파일에 대한 SVGR 로더 추가
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};