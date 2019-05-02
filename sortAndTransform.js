//Given an array of numbers, return a string made up of
//four parts

//a - a four character 'word', made up of the characters
//derived from the first two and last two numbers in the array
//order should be read left to right(first, second, second last, last)

//b - the same as above, post sorting the array into ascending order

//c - the same as above, post sorting the array into descending order

//d - the same as above, post converting the array into ASCII characters
//and sorting alphabetically

//the four parts should form a single string, each part separated by
//a hyphen '-'

function sortTransform(arr) {
	let result = '';
	const getChars = arr => `${[arr[0], arr[1], arr[arr.length-2], arr[arr.length-1]]
	.map(e=> String.fromCharCode(e)).join("")}`
	result += getChars(arr);
	result += `-${getChars(arr.sort((a,b)=>a-b))}`;
	result  += `-${getChars(arr.sort((a,b)=>b-a))}`;
	result += `-${arr.map(e=>String.fromCharCode(e)).sort().filter((e,i)=>[0,1,arr.length-2,arr.length-1].includes(i)).join("")}`;
	return result;
}
sortTransform([121, 122, 123, 124, 125, 120, 122, 132]);