import {put, takeEvery} from "redux-saga/effects"

import {ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator} from "../store/countReducer";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
	// перед каким-то асинхронным действием мы пишем yield, т.е. следующий кусок кода не выполнится пока не выполнится это асинхронное действие
	yield delay(1000)
	// put это своего рода dispatch только для асинхронных экшенов
	// Сначала выполнится задержка в 1 сек, а затем выполнится put
	yield put(incrementCreator())
}

function* decrementWorker() {
	yield delay(1000)
	yield put(decrementCreator())
}

// в watcher через yield вызываем функцию takeEvery, куда передаем тип экшена за которым необходимо
// следить и воркер который должен отработать по этому экшену
export function* countWatcher() {
	yield takeEvery(ASYNC_INCREMENT, incrementWorker)
	yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}