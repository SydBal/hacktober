import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import App from "./App";

const approot = document.getElementById("root")

ReactDOM.render(
  <AppContainer>
    <App/>
  </AppContainer>, 
  approot);

// Enable hot reloads for development
if (module.hot) {
  console.log(`[HMR] Hot Reload Available`);

  module.hot.accept(`./App`, () => {
    console.log(`[HMR] Hot Reloading...`);
    const NextApp = App;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      approot
    );

  });
}