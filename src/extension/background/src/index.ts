import { wrapStore } from "webext-redux";
import { subscribeListeners } from "./listeners";
import { getState, saveState } from "./persistState";
import { createStore } from "@extension/core/lib/store";

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
})();
