function mergeArrays(arr1, arr2) {
	if (!arr1.length && !arr2.length) return [];
	const hash = {};
	return [...arr1, ...arr2].sort((a, b) => a - b).filter(e => {
		if (!hash[e]) {
			hash[e] = true;
			return true;
		} else {
			return false;
		}
	})
}
