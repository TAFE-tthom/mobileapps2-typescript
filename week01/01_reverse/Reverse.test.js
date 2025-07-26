const reverseArray = require('./Reverse.js');

test('reversing an empty array', () => {
	
	let array = [];
	reverseArray(array);
	expect(array).toEqual([]);

});

test('reversing an array with 1 element', () => {
	
	let array = [1];
	reverseArray(array);
	expect(array).toEqual([1]);

});

test('reversing an array with 2 elements', () => {
	
	let array = [1, 2];
	reverseArray(array);
	expect(array).toEqual([2, 1]);

});

test('reversing an array with 3 elements', () => {
	
	let array = [1, 2, 3];
	reverseArray(array);
	expect(array).toEqual([3, 2, 1]);

});

test('reversing an array with 4 elements', () => {
	
	let array = [1, 2, 3, 4];
	reverseArray(array);
	expect(array).toEqual([4, 3, 2, 1]);

});

test('reversing an 4 strings', () => {
	
	let array = ["One", "Two", "Three", "Four"];
	reverseArray(array);
	expect(array).toEqual(["Four", "Three", "Two", "One"]);

});

test('reversing a large array', () => {
	
	let array = [];
	let answerArray = [];
	for(let i = 0; i < 100; i++) {
		array.push({
			number: i+1,
		});
	};
	for(let i = 99; i >= 0; i--) {
		answerArray.push({
			number: i+1,
		});
	};
	reverseArray(array);
	expect(array).toEqual(answerArray);

});

