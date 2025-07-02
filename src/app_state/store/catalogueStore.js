import { createStore } from "redux";
import * as redux from "redux";
import * as reduxLogger from "redux-logger";
import catalogueReducer from "../reducers/catalogueReducer";
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const store = createStore(catalogueReducer, applyMiddleware(logger));
export default store;
