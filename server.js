const express = require(`express`)
const app = express()
const path = require(`path`)
const bundle = require(`./src/bundler/watch.js`)

// Compile CSS and JS. If DEV=true, recompiles when code changes
bundle(app)

// Prepare Bundle and Assets for service
app.use(express.static(path.join(__dirname, `/dist`)))
app.use(express.static(path.join(__dirname, `/src/assets`)))
app.use(`/*`, (req, res) => {
  res.sendFile(path.resolve(__dirname + `/dist/index.html`))
})

// Config port for Heroku Buildpack
const port = process.env.PORT || 8080

// Enable http server
const server = require(`http`).createServer(app);

// Service!
server.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Listening on port : ${port}`)
  }
})