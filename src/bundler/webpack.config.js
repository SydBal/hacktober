const path = require(`path`);

/* SETTINGS
 *
 * mode: `none`
 *   prevents default behavior of webpack and allows control or dev/prod behavior
 * 
 * devtool: `source-map`
 *   tells webpack middleware to output to bundle.js file
 */

module.exports = {
  mode: `none`,
  devtool: `source-map`,
  entry: path.join(__dirname, `../components/index.js`),
  output: {
    path: path.join(__dirname, `../../dist/`),
    filename: `app.js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
						presets: [`@babel/preset-env`, `@babel/preset-react`]
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