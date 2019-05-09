//I am given a dictionary/hash/object containing
//some languages an my test result in the given languages

//return the list of languages where my test score is at least 60,
//in descending order of the results

//there will be no duplicate values

function myLanguages(results) {;
	return Object.keys(results).filter(lng => results[lng] >= 60).sort((a, b) => results[b] - results[a]);
}
console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }))