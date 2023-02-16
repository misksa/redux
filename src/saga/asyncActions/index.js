import {all} from "redux-saga/effects"
import {countWatcher} from "./countSaga";
import {setUsersWatcher} from "./userSaga";

// для объединения всех watcher используется функция all, получается некий корневой watcher который следит за всеми остальными
export function* rootWatcher() {
	yield all([
		countWatcher(),
		setUsersWatcher()
	])
}
