// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

function power(base, exponent) {
	if(exponent === 0){
		return 1;
	}
	if(exponent < 0){
		throw new Error('Exponent must be greater than 0');
	}
	return base*power(base, exponent-1);
}

console.log(power(2,0)); // 1
console.log(power(2,2)); // 4
console.log(power(2,4)); // 16
console.log(power(2,3)); // 8
console.log(power(2,5)); // 32
console.log(power(2,6)); // 64