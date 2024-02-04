//Given a multi-dimensional integer array, return the total number of integers stored inside this array

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
var ten = totalIntegers([[[5], 3], 0, 2, ['foo'], [6,9,122], [4, [5, 6]]]); // 7
var eight = totalIntegers([[[5], 3], 0, 2, ['foo'], ['foo', 2], [4, [5, 6]]]); // 7

function totalIntegers(array){
	var count = 0;
	for(var key in array){
		if(typeof array[key] == 'number'){
			count+=1
		}
		if(typeof array[key] == 'object'){
			count+=totalIntegers(array[key])
		}
	}
	return count;
}

console.log(seven)
console.log(eight)
console.log(ten)