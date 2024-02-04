// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

function all (arr, callback) {
	if(arr.length === 0){
		return true;
	}
	if(callback(arr[0])){
		return all(arr.slice(1), callback);
	}
	else{
		return false;
	}
}

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});
var allAreLessThanTen = all([1,2,9], function(num){
	return num < 10;
});

console.log(allAreLessThanSeven); // false
console.log(allAreLessThanTen); // true
