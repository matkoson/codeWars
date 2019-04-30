//extend the Array object and add the sortReloaded(dir) method
//to it in order to make task easier and cleaner

//it should receive a 'dir' parameter which has two possible
//values 'asc' or 'desc'; and return a new array ordered
//ascendingly or descendingly respectively

//if no dir parameter is set it should assume 'asc' by default
//if it has an invalid value, return false

//all the arrays will contain only Integer numbers so I don't
//care about validating them

Array.prototype.sortReloaded = function (dir = 'asc') {
	if (dir === 'asc') {
		return this.slice().sort((a, b) => a - b);
	} else if (dir === 'desc') {
		return this.slice().sort((a, b) => b - a);
	} else {
		return false;
	}
}

//method shouldn't modify the original array