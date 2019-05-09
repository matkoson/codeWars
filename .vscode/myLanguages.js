//I am given a dictionary/hash/object containing
//some languages an my test result in the given languages

//return the list of languages where my test score is at least 60,
//in descending order of the results

//there will be no duplicate values

function myLanguages(results) {
	const resultList = [];
	Object.keys(results).forEach(lng => results[lng] >= 60 ? resultList.push(lng):null);
	return resultList.sort((a, b) => results[b] - results[a]);
}
console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))