import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./store/countReducer";
import {fetchUsers} from "./store/userReducer";

const ReduxSaga = () => {
	const count = useSelector(state => state.countReducer.count)
	const users = useSelector(state => state.userReducer.users)
	const dispatch = useDispatch()

	return (
		<div style={{marginTop: '20px'}}>
			<div style={{fontSize: '2rem'}}>{count}</div>
			<div className='btns'>
				<button className='btn' onClick={() => dispatch(asyncIncrementCreator())} > Инкремент++</button>
				<button className='btn' onClick={() => dispatch(asyncDecrementCreator())} > Декремент--</button>
				<button className='btn' onClick={() => dispatch(fetchUsers())} > Получить юзеров</button>
			</div>
			<div className='users'>
				{users.map(user =>
					<div className='user' key={user.id}>
						{user.name}
					</div>
				)}
			</div>
		</div>
	);
};

export default ReduxSaga;