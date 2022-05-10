const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

rules.push({
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader', 
    'css-loader',
    {
      loader: "sass-loader",
      options: {
        // Prefer `dart-sass`
        implementation: require("sass"),
      },
    }
  ],
});
rules.push(
  {
    test: /\.(jpe?g|png|gif|svg)$/i, 
    loader: 'file-loader',
    options: {
      name: '[name].[ext]'
    }
  }
)
rules.push({
  test: /\.(svg)$/,
  loader: 'raw-loader',
})

module.exports = {
  devtool: "source-map",
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css']
  },
};
