import React from 'react';
import {Route, Routes} from "react-router-dom";
import ReduxSaga from "../saga/ReduxSaga";
import ReduxThunk from "../redux-thunk/ReduxThunk";

const AppRouters = () => {
	return (
		<Routes>
			<Route
				key={'/redux-saga'}
				path={'/redux-saga'}
				element={<ReduxSaga />}
			/>
			<Route
				key={'/redux-thunk'}
				path={'/redux-thunk'}
				element={<ReduxThunk />}
			/>
		</Routes>
	);
};

export default AppRouters;