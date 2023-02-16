import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {sagaStore} from "./saga/store";
import {thunkStore} from "./redux-thunk/store";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
		// для замены и проверки redux saga или redux thunk нужно заменить тут store на нужный
		<Provider store={sagaStore}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
);
