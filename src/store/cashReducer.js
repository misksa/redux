const defaultState = {
	cash: 0
}

// reducer отвечает изменение состояния в state
export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "ADD_CASH":
			return {...state, cash: state.cash + action.payload}
		case "GET_CASH":
			return {...state, cash: state.cash - action.payload}
		default:
			return state
	}
}
