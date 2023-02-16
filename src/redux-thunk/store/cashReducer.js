const defaultState = {
	cash: 0
}

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"


// reducer отвечает изменение состояния в state
export const cashReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_CASH:
			return {...state, cash: state.cash + action.payload}
		case GET_CASH:
			return {...state, cash: state.cash - action.payload}
		default:
			return state
	}
}

// Тут используем стрелочную функцию для возврата объектной строки, т.е. мы передаем в функцию payload а из функии возвращаем объект
// {type: ADD_CASH, payload: payload}
export const addCashAction = (payload) => ({type: ADD_CASH, payload})

export const getCashAction = (payload) => ({type: GET_CASH, payload})
