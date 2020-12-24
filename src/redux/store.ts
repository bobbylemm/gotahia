import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'

import { ChatHistoryReducer } from "./chatHistory/reducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
    chatHistory: ChatHistoryReducer
}))

export type AppState = ReturnType<typeof persistedReducer>

export default () => {
    let store = createStore(persistedReducer, composeEnhancers())
    let persistor = persistStore(store)
    return { store, persistor }
}