import React, { Component } from 'react';
import store from '../store';
import {
	// changeInputAction,
	// addItemAction,
	// deleteItemAction,
	// getTodoList,
	getMylistAction,
} from '../store/actionCreators';
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from '../store/actionTypes';
import TodoListUI from './TodoListUI';
// import { debounce } from '../utils';

// 待办事项
class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = store.getState();
		this.inputChangeValue = this.inputChangeValue.bind(this);
		this.storeChange = this.storeChange.bind(this);
		this.clickBtn = this.clickBtn.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
		store.subscribe(this.storeChange); // 订阅
	}

	render() {
		return (
			<TodoListUI
				inputValue={this.state.inputValue}
				list={this.state.list}
				inputChangeValue={this.inputChangeValue}
				clickBtn={this.clickBtn}
				deleteItem={this.deleteItem}
			></TodoListUI>
		);
	}

	componentDidMount() {
		/** 1_redux-thunk 使用方式 */
		// const action = getTodoList();
		// store.dispatch(action);

		/** 2_redux-saga 使用方式 */
		const action = getMylistAction();
		store.dispatch(action);
		console.log(action);
	}

	inputChangeValue(e) {
		// console.log('触发了!!!');
		// this.setState({
		// 	inputValue: e.target.value,
		// });
		const action = {
			type: CHANGE_INPUT,
			value: e.target.value,
		};
		store.dispatch(action);
	}
	storeChange() {
		this.setState(store.getState());
	}
	clickBtn() {
		if (this.state.inputValue) {
			const action = { type: ADD_ITEM };
			store.dispatch(action);
		}
	}
	deleteItem(index) {
		const action = {
			type: DELETE_ITEM,
			index,
		};
		console.log(action);
		store.dispatch(action);
	}
}

export default TodoList;
