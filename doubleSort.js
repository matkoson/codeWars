//I will be given an array. The values in the array will
//either be numbers or strings, or a mix of both, there's
//no possibility of an empty array, nor a sparse one

//I should return a single array that has first the numbers
//sorted in ascending order, followed by the strings sorted
//in alphabetic order. The values must maintain their original
//type.

//Note that numbers written as strings are strings and must
//be sorted with the other strings

function dbSort(arr) {
	const numArr = [];
	const strArr = [];
	arr.forEach(element=>{
		if(typeof element === 'number'){
			numArr.push(element)
		} else if(typeof element === 'string'){
			strArr.push(element);
		}
	})

	return [...numArr.sort((a,b)=> a-b), ...strArr.sort()]
}
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));