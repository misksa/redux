import {createStore, combineReducers, applyMiddleware} from "redux";
import {countReducer} from "./countReducer";
import {userReducer} from "./userReducer";
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../asyncActions";

const sagaMiddleware = createSagaMiddleware()

const rootReducer =	combineReducers({
	countReducer,
	userReducer
})

export const sagaStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// передаем watcher
sagaMiddleware.run(rootWatcher)