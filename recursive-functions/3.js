// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

function factorial(number) {
	if(number === 1){
		return 1
	}
	if(number < 0){
		throw new Error('Number must be greater than 0');
	}
	return number*factorial(number-1);
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120