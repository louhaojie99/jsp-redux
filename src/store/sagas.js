import { takeEvery, put } from 'redux-saga/effects';
import { GET_MY_LIST } from './actionTypes';
import axios from 'axios';
import { getListAction } from './actionCreators';

// JS中Generator函数
function* mySaga() {
	yield takeEvery(GET_MY_LIST, getList);
}

function* getList() {
	// axios
	// 	.get('https://mock.mengxuegu.com/mock/6178f2a2722e444f8c701be3/dev-api/task/list')
	// 	.then(res => {
	// 		const data = res.data;
	// 		const action = getListAction(data);
	// 		put(action);
	// 	});
	const res = yield axios.get(
		'https://mock.mengxuegu.com/mock/6178f2a2722e444f8c701be3/dev-api/task/list'
	);
	const data = res.data;
	const action = getListAction(data);
	yield put(action);
}

export default mySaga;
