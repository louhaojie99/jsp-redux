/**
 * 公共说明
 * applyMiddleware  redux-thunk中间件
 * compose          增强函数
 */

/**
 * redux-thunk 中间件配置
 * redux-thunk 中间件配置
 * redux-thunk 中间件配置
 */
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reducer';
// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
// 	: compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk)); // redux-thunk
// const store = createStore(reducer, enhancer);
// export default store;

/**
 * redux-saga 中间件配置
 * redux-saga 中间件配置
 * redux-saga 中间件配置
 */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'; // 管理员
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
// 配置thunk中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
	? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
	: compose;
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware)); // redux-saga
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySagas);
export default store;
