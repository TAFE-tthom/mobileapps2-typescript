import {expect, test} from '@jest/globals';

import { Zipper } from './zip'

test("constructing Zipper", () => {
	let zip = new Zipper();
	expect(zip).toBeDefined();
})

test("constructing using Zipper.with(), empty []", () => {
	let zip = Zipper.with([]);
	expect(zip).toBeNull();
})

test("zip with two arrays, same size", () => {

	let zip = Zipper.with([
		[1, 2, 3, 4],
		["One", "Two", "Three", "Four"]
	]);

	expect(zip.hasNext()).toBe(false);
	expect(zip.next()).toEqual([1, "One"]);
	expect(zip.next()).toEqual([2, "Two"]);
	expect(zip.next()).toEqual([3, "Three"]);
	expect(zip.next()).toEqual([4, "Four"]);
	
});

test("zip with three arrays, same size", () => {

	let zip = Zipper.with([
		[1, 2, 3, 4],
		["One", "Two", "Three", "Four"],
		[true, false, true, false]
	]);

	expect(zip.hasNext()).toBe(true);
	expect(zip.next()).toEqual([1, "One", true]);
	expect(zip.next()).toEqual([2, "Two", false]);
	expect(zip.next()).toEqual([3, "Three", true]);
	expect(zip.next()).toEqual([4, "Four", false]);
	expect(zip.hasNext()).toBe(false);
	
});
test("zip with two arrays, second is smaller", () => {

	let zip = Zipper.with([
		[1, 2, 3, 4],
		["One", "Two"]
	]);

	expect(zip.hasNext()).toBe(false);
	expect(zip.next()).toEqual([1, "One"]);
	expect(zip.next()).toEqual([2, "Two"]);
	expect(zip.next()).toEqual([3, null]);
	expect(zip.next()).toEqual([4, null]);
	
});

test("zip with two arrays, first is smaller", () => {

	let zip = Zipper.with([
		[1, 2],
		["One", "Two", "Three", "Four"]
	]);

	expect(zip.hasNext()).toBe(false);
	expect(zip.next()).toEqual([1, "One"]);
	expect(zip.next()).toEqual([2, "Two"]);
	expect(zip.next()).toEqual([null, "Three"]);
	expect(zip.next()).toEqual([null, "Four"]);
	
});
