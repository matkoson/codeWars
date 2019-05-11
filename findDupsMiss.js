//in this kata, I have an unsorted sequence
//of consecutive numbers from a to b, such that
//always a < b(a is the minimum, and b is the
//maximum value)

//there were introduced an unknown amount of duplicates
//in this sequence and I know that there is an only missing
//value such that all the duplicate values and the missing
//value are between a and b, but never coincide with them

//find the missing number with the duplicate numbers(duplicates
//should be output in a sorted array)

function findDupsMiss(arr) {
	const hash = {};
	const dupls = [];
	let min = null;
	let lastVal = null;
	let missing = null;

	arr.slice().sort((a,b)=>a-b).forEach(e =>{
		if(!lastVal) lastVal = e;
		//initiate the last value to the first item
		if (!min) min = Math.min(min, e);
		//initiate minimum value

		if(hash[e]) {
			dupls.push(e);
		} else {
			hash[e] = true;
		}
		//search for duplicates


		if(e !== lastVal + 1 && lastVal !== e) {missing = e - 1;}
		//if there's a gap between items, but not during
		//initialization, set the missing value
		lastVal = e;
		//update the last seen value
	})

	return [missing, dupls];
}

console.log(findDupsMiss([10, 9, 8, 9, 6, 1, 2, 4, 3, 2, 5, 5, 3]));