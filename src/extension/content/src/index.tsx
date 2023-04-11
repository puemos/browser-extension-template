import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "webext-redux";
import App from "./App";
import { ColorModeScript, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

import { Store as IStore } from "@extension/core/lib/store";

(async () => {
  const store = new Store();

  await store.ready();

  const root = document.createElement("div");
  root.id = "browser-extension-template";
  document.body.appendChild(root);

  delete theme.styles.global;

  ReactDOM.createRoot(root).render(
    <Provider store={store as IStore}>
      <React.StrictMode>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </React.StrictMode>
    </Provider>
  );
})();
