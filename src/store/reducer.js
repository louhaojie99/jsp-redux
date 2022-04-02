import { cloneDeep } from '../utils';
// import {
// 	changeInputAction,
// 	addItemAction,
// 	deleteItemAction,
// } from '../store/actionCreators';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';

const defaultState = {
	inputValue: 'Write Something',
	list: [],
	/*
	[
	'早9点开晨会，分配今天的代码和任务.',
	'早9点和项目经理开需求沟通会.',
	'晚5点组织人员进行Review代码.',
	]
	*/
};

export default function reducer(state = defaultState, action) {
	// Reducer里只能接收state, 不能改变state

	if (action.type === CHANGE_INPUT) {
		let newState = cloneDeep(state);
		newState.inputValue = action.value;
		return newState;
	}

	if (action.type === ADD_ITEM) {
		let newState = cloneDeep(state);
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}

	if (action.type === DELETE_ITEM) {
		let newState = cloneDeep(state);
		newState.list.splice(action.index, 1);
		return newState;
	}

	if (action.type === GET_LIST) {
		console.log(action);
		let newState = cloneDeep(state);
		newState.list = action.data;
		return newState;
	}
	return state;
}
