import {put, takeEvery, call} from "redux-saga/effects";
import {setUsers, FETCH_USERS} from "../store/userReducer";

const fetchUsers = () => fetch('https://jsonplaceholder.typicode.com/users')


function* setUsersWorker() {
	// для того что бы достать данные из ответа используем функцию call
	const data = yield call(fetchUsers)
	// для того что бы преобразовать данные в json так же используем функцию call и преобразование данных оборачиваем в Promise
	const json = yield call(() => new Promise(res => res(data.json())))
	// далее просто диспатчим данные в наш экшен креатор
	yield put(setUsers(json))
}

export function* setUsersWatcher() {
	yield takeEvery(FETCH_USERS, setUsersWorker)
}