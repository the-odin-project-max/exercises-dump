// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            },
			added: {
				thing: "baloo"
			}
        }
    }
}

function contains(object, value, deep = 0) {

	for(var key in object){
		console.log(`${deep} - Inside func:`, key)
		if(object[key] === value){
			console.log("RETURN TRUE")
			return true;
		}
		if(typeof object[key] == 'object'){
			console.log("DEEPER")
			if(contains(object[key], value, deep+=1)){
				return true;
			}
		}
	}
	return false;
}

let hasIt = contains(nestedObject, 44);
let no = contains(nestedObject, "foo")

let baloo = contains(nestedObject, "baloo"); // true
console.log(hasIt, no, baloo);