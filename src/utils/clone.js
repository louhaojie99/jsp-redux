/**
 * 引用数据类型数据深拷贝
 *
 */
function cloneDeep(data) {
	return JSON.parse(JSON.stringify(data));
}

export { cloneDeep };
