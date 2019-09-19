function findInArray(arr, attr, val) {
	return arr.find(function(a) {
		return a[attr] == val;
	});
}

export { findInArray };
