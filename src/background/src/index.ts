import { wrapStore } from "webext-redux";
import { subscribeListeners } from "./listeners";
import { getState, saveState } from "./persistState";
import { createStore } from "@extension/core/lib/store";
import { action, scripting, tabs } from "webextension-polyfill";

(async () => {
  const state = await getState();
  const store = createStore(
    {
      // service: Service,
    },
    state
  );

  wrapStore(store);

  store.subscribe(() => {
    saveState(store.getState());
  });

  subscribeListeners(store);

  action.onClicked.addListener(async (tab) => {
    await scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const root = document.getElementById("browser-extension-template-app");

        if (!root) {
          return;
        }

        if (root.classList.contains("show")) {
          root.style.opacity = "0";
          root.style.transform = "translateX(120%)";
        } else {
          root.style.opacity = "1";
          root.style.transform = "translateX(0)";
        }
        root.classList.toggle("show");
      },
    });
  });
})();
