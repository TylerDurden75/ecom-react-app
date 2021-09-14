/* eslint-disable import/no-anonymous-default-export */
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist"; // allow browser to cache
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
