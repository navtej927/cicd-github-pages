import React from "react";
import { Provider } from "react-redux";
import { HomePage } from "./Pages/HomePage";
import PackageJson from "../package.json";
import store from "./store";
import { CONFIG } from "./Config";

export const App = () => {
  return (
    <Provider store={store}>
      {CONFIG.APP_NAME}
      <HomePage />
      <div>version ----- {PackageJson.version}</div>
    </Provider>
  );
};
