// Write a function that sums squares of numbers in list that may contain more lists

function SumSquares(array){
	var count = 0;
	for(var key in array){
		if(typeof array[key] == 'number'){
			count+=array[key]**2
		}
		if(typeof array[key] == 'object'){
			count+=SumSquares(array[key])
		}
	}
	return count;
}

var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400