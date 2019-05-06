//write a function that takes an array of strings
//as an argument and returns a sorted array containing
//the same strings, ordered from shortest to longest

//all of the strings in the array passed to my function
//will be different lengths, so I will not have to decide
//how to order multiple strings of the same length

function sortByLength(arr) {
	return arr.sort((a,b)=> a.length - b.length)

}

console.log(sortByLength(["Beg", "Life", "I", "To"]))