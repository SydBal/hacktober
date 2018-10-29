const webpack =  require('webpack');
const webpackConfig =  require(`./webpack.config.js`);
const compiler = webpack(webpackConfig)
const webpackMiddleware = require(`webpack-dev-middleware`);
const hmr = require(`webpack-hot-middleware`)


const compile = (app) => {
    // Compiles JS and CSS files once for deployment
    compiler.run(()=>{
        console.log(`Frontend JS and CSS compiled.`)
    })
}

const watch = (app) => {
    // Watches for changes and updates files as they change
    app.use(
        webpackMiddleware(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );

    // Update in the browser when code changes (Hot Module Replacement)
    app.use(hmr(compiler));
}

const bundle = (app, dev=false) =>{
    dev ?
        // Use Webpack to bundle and watch JS and CSS for dev
        watch(app)
        :
        // Just compile once if using for production
        compile(app)
}

module.exports = bundle;