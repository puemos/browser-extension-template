import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import App from "./App";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import { Store as IStore } from "@extension/core/lib/store";
import { tabs } from "webextension-polyfill";

(async () => {
  await tabs.query({ active: true, currentWindow: true });

  const store = new Store();

  await store.ready();

  ReactDOM.render(
    <Provider store={store as IStore}>
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );
})();
