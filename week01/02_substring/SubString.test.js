const findSubString = require('./SubString.js');


test("find 'or' in 'ore'", () => {
	
	expect(findSubString("ore", "or")).toBe(0);

});


test("find 're' in 'ore'", () => {
	
	expect(findSubString("ore", "re")).toBe(1);

});


test("find 'one' in 'two'", () => {
	
	expect(findSubString("two", "one")).toBe(-1);

});


test("find 'ing' in 'Morning'", () => {
	
	expect(findSubString("Morning", "ing")).toBe(4);

});


test("find 'Day' in 'Long Day'", () => {
	
	expect(findSubString("Long Day", "Day")).toBe(5);

});


test("find empty substring in 'ore'", () => {
	
	expect(findSubString("ore", "")).toBe(-1);

});

test("find 'ore' in empty string", () => {
	
	expect(findSubString("", "ore")).toBe(-1);

});


