import store from "@config/redux/store";
import App from "./App";
import React from "react";
import { Provider } from "react-redux";

export default function Setup() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
