import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST } from './actionTypes';
import axios from 'axios';

const changeInputAction = value => ({
	type: CHANGE_INPUT,
	value,
});
const addItemAction = () => ({
	type: ADD_ITEM,
});
const deleteItemAction = index => ({
	type: DELETE_ITEM,
	index,
});
const getListAction = data => ({
	type: GET_LIST,
	data,
});

export { changeInputAction, addItemAction, deleteItemAction, getListAction };

/** redux-thunk使用方式 */
export const getTodoList = () => {
	return dispatch => {
		axios.get('https://mock.mengxuegu.com/mock/6178f2a2722e444f8c701be3/dev-api/task/list').then(res => {
			const data = res.data;
			const action = getListAction(data);
			dispatch(action);
		});
	};
};

/** redux-saga使用方式 */
export const getMylistAction = () => ({
	type: GET_MY_LIST,
});
