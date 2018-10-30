const webpack =  require(`webpack`);
const webpackConfig = require(`./webpack.config.js`);
const compiler = webpack(webpackConfig)

const compile = (app) => {
    // Compiles JS and CSS files once for deployment
    compiler.run(()=>{
        console.log(`Frontend JS and CSS compiled.`)
    })
}

const watch = (app) => {
    // Watches for changes and updates files as they change
    app.use(
        require(`webpack-dev-middleware`)(compiler, {
            noInfo: true,
            publicPath: webpackConfig.output.publicPath
        })
    );

    // Update in the browser when code changes (Hot Module Replacement)
    app.use(require(`webpack-hot-middleware`)(compiler));
}

const bundle = (app) =>{
    process.env.DEV ?
        // Use Webpack to bundle and watch JS and CSS for dev
        watch(app)
        :
        // Just compile once if using for production
        compile(app)
}

module.exports = bundle;