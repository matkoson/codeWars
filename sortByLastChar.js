//given a string of words(x), I need to return
//an array of the words, sorted alphabetically
//by the final character in each

//if two words have the same last letter, they
//returned array should show them in the order
//they appeared in the given string

//al inputs will be valid

function last(x) {
	return x.split(" ").sort((a,b)=> 
		x.charCodeAt(x.indexOf(a[a.length-1]))- 
	 x.charCodeAt(x.indexOf(b[b.length-1]))
	);
}
console.log(last('man i need a taxi up to ubud'));