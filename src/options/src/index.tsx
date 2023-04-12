import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import App from "./App";
import "./index.css";

import { Store as IStore } from "@extension/core/lib/store";
import { tabs } from "webextension-polyfill";

(async () => {
  await tabs.query({ active: true, currentWindow: true });

  const store = new Store();

  await store.ready();

  ReactDOM.render(
    <Provider store={store as IStore}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
})();
