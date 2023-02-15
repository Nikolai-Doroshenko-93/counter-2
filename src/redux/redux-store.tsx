import React from "react";
import counterReducer from "./counterReducer";
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    counterState: counterReducer
})

const store = legacy_createStore(rootReducer)

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store

