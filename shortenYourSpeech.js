//I am given a String of one or more words.
//My task is to check the length of each word and if it's
//less than 4, I keep it unmodified otherwise I find out
//the first vowel which is coming after 3-rd character
//and replace vowel and rest of word with a dot

//Finally, I should return the same string but shorten
//(only if the length of words is more then 3 characters)

//I should not trim anything

//Apostrophes are part of words

//Commas following shortened words are considered characters
//and should be removed

function shortenSpeech(str) {
	const vowels = 'aeiou';
	//list all the vowels
	return str = str.split(" ").map(word => {
		let foundIndex;
		//if the length is less than 4, keep unmodified
		if (word.length < 4) return word;
		return word.split("").some((char, index) => {
			//if there's a character, which appears after the third index 
			if (vowels.includes(char) && index > 2) {
				foundIndex = index;
				//save its index 
				return true;
			} else {
				return false
			}
		}) ? `${word.slice(0, foundIndex)}.` :
			//then slice the original word up to the saved index,
			//and concatenate it with a single dot
			word
	}).join(" ");
	//join the initially splitted string again
}