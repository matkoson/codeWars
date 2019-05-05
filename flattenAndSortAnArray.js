//Given a two-dimensional array of integers,
//return the flattened version of the array
//with all the integers in the sorted(ascending) order


//es2019 version

// function flattenAndSort(arr) {
// 	while(arr.some(e=>typeof e === 'object')){
// 		arr = arr.flat();
// 	}
// 	console.log(arr);
// 	return arr.sort((a,b)=> a-b);

// }

function flattenAndSort(arr) {
	while(arr.some(e=> typeof e === 'object')){
		arr = arr.reduce((acc,cur) => {
			if(Array.isArray(cur)) {
			return [...acc, ...cur];
			} else {
				return [...acc, cur];
			}
		}, [])
	}
	return arr.sort((a,b)=>a-b);
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));