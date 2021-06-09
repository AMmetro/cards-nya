import {combineReducers, createStore, applyMiddleware, Store} from "redux"
import * as React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import {reduxReducer1} from "./reduxReducer1";
import {reduxReducer2} from "./reduxReducer2";

const reducers = combineReducers({
    reduxStore1: reduxReducer1,
    reduxStore2: reduxReducer2   
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
