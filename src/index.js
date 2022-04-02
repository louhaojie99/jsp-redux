import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './view/TodoList';

// 全局样式
import './global.css';
// ant design
import 'antd/dist/antd.css';

/**
 * React.StrictMode 严格模式
 */
ReactDOM.render(
	// <React.StrictMode>
	<TodoList />,
	// </React.StrictMode>,
	document.getElementById('root')
);
