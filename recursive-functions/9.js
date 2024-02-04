// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

function replicate(repetitions, number){
	if(repetitions <= 0){
		return [];
	}
	return [number, replicate(repetitions-1, number)].flat()
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []