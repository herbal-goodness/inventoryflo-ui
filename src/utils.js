function findInArray(arr, attr, val) {
	return arr.find(function(a) {
		return String(a[attr]) === String(val);
	});
}

export { findInArray };
