/* SETTINGS
 *
 * mode: `none`
 *   prevents default behavior of webpack and allows control or dev/prod behavior
 * 
 * devtool: `source-map`
 *   tells webpack middleware to output to bundle.js file
 * 
 * plugins: [
 *   webpack.HotModuleReplacementPlugin()
 *     allows browser refreshes on code updates
 * ]
 */

const webpack = require("webpack");
const path = require(`path`);

module.exports = {
  mode: `none`,
  devtool: `source-map`,
  entry: {
    index: [
      `react-hot-loader/patch`,
      `webpack-hot-middleware/client`,
      path.join(__dirname, `../components/index.js`)
    ]
  },
  output: {
    path: path.join(__dirname, `../../dist/`),
    publicPath: `/`,
    filename: `app.js`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [`@babel/preset-env`, `@babel/preset-react`],
            plugins: ['react-hot-loader/babel']
          }
        },
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [`style-loader`, `css-loader`]
      }
    ]
  }
};