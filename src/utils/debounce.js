/**
 * 简单实现防抖方法
 * @param   {Function} func  要防抖的函数
 * @param   {number}   delay 防抖的毫秒数
 * @returns {Function}
 */
export function debounce(func, delay = 1000) {
	let timer = null;
	return function () {
		timer && clearTimeout(timer);
		timer = setTimeout(() => {
			func.call(this);
		}, delay);
	};
}
