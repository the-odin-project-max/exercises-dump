// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

function sumRange(number) {
	if(number === 1){
		return 1
	}
	if(number < 0){
		throw new Error('Number must be greater than 0');
	}
	return number+sumRange(number-1);
}

console.log(sumRange(3)); // 6
console.log(sumRange(4)); // 10
console.log(sumRange(5)); // 15
try{
	console.log(sumRange(-3)); // Error: Number must be greater than 0
}
catch(e){
	console.log(e.message);
}
console.log(sumRange(1)); // 1