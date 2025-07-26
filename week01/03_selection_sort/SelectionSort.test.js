const selectionSortNumbers = require('./SelectionSort.js');

test("sorting on no numbers", () => {
	let numbers = [];
	selectionSortNumbers(numbers);

	expect(numbers.length).toBe(0);

})

test("sorting on 1 number", () => {
	let numbers = [1];
	selectionSortNumbers(numbers);

	expect(numbers.length).toBe(1);
	expect(numbers[0]).toBe(1);

})

test("sorting on 2, sorted numbers", () => {
	let numbers = [1, 2];
	selectionSortNumbers(numbers);

	expect(numbers.length).toBe(2);
	expect(numbers).toEqual([1, 2]);

})

test("sorting on 2, unsorted numbers", () => {
	let numbers = [2, 1];
	selectionSortNumbers(numbers);

	expect(numbers).toEqual([1, 2]);

})


test("sorting on 3, unsorted numbers", () => {
	let numbers = [2, 1, 5];
	selectionSortNumbers(numbers);

	expect(numbers).toEqual([1, 2, 5]);

})

test("sorting on 10, unsorted numbers", () => {
	let numbers = [56, 23, 98, 1, 10, 51, 78, 81, 65, 34];
	selectionSortNumbers(numbers);

	expect(numbers).toEqual([1, 10, 23, 34, 51, 56, 65, 78, 81, 98]);

})
