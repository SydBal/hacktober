import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';
import App from "./App";



ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>, 
  document.getElementById("root"));

if (module.hot) {
  console.log('hot reloading active');
  module.hot.accept('./App', () => {
    console.log('doing hot reload');
    const NextApp = require('./App').App;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      approot
    );
  });
}