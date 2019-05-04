//my function will take an array as an argument and needs
//to return a new array with the values distributed evenly

//Argument: ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']

//Result: ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

//the underlying order will stay the same as in the original array
//so, in the ase of my argument above, 'one' comes before 'two'
//so it stays this way in the returned array

//the aim is to have the longest possible chain of evenly distributed
//values(from the left to right), this means that an argument with many
//of the same elements might have many which are repeated at the end


const distributeEvenly = arr => {
	const getOrder = [];
	const hash = {};
	const result = [];
	let i = 0;
	arr.forEach(e => {
		if(!hash[e]) {
			getOrder[i] = e;
			i+=1;
			hash[e] = 1;
		} else {
			hash[e] +=1;
		}
	});
	let j = 0
	//put unique values in a given order inside of an array
	while(result.length !== arr.length) {
		j = j % getOrder.length;
		const orderedVal = hash[getOrder[j]];
		if(orderedVal){
			result.push(getOrder[j]);
			hash[getOrder[j]] -=1;
		} 
		j += 1;
	}
	//loop over the order, until I reach the length of
	//the initially given array
	return result;
};


console.log(distributeEvenly(['one', 'one', 'two', 'two', 'three', 'three', 'four', 'one']));