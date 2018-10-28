const webpack =  require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig =  require('./webpack.config.js');

const compile = (app) => {
    // Compiles JS and CSS files once for deployment
    webpack(webpackConfig).run(()=>{
        console.log(`Frontend JS and CSS compiled.`)
    })
}

const watch = (app) => {
    // Watches for changes and updates files as they change
    app.use(webpackMiddleware(webpack(webpackConfig)));
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