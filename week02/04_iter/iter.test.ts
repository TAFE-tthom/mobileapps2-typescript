import {expect, test} from '@jest/globals';

import { LinkedList } from './linkedlist'

test("constructing iterator", () => {
	let list = new LinkedList();
	let iter = list.getIterator();
	expect(iter).toBeDefined();
})


test("linked list iterator, 4 words", () => {

	let list = new LinkedList();

	list.append("One");
	list.append("Two");
	list.append("Three");
	list.append("Four");
	
	let iter = list.getIterator();
	
	expect(iter.hasNext()).toBe(true);
	expect(iter.next()).toEqual("One");
	expect(iter.next()).toEqual("Two");
	expect(iter.next()).toEqual("Three");
	expect(iter.next()).toEqual("Four");
	expect(iter.hasNext()).toBe(false);
	
});

test("linked list iterator, 4 numbers", () => {

	
	let list = new LinkedList();

	list.append(1);
	list.append(2);
	list.append(3);
	list.append(4);
	
	let iter = list.getIterator();
	
	expect(iter.hasNext()).toBe(true);
	expect(iter.next()).toEqual(1);
	expect(iter.next()).toEqual(2);
	expect(iter.next()).toEqual(3);
	expect(iter.next()).toEqual(4);
	expect(iter.hasNext()).toBe(false);
});

test("linked list iterator, 3 words", () => {

	let list = new LinkedList();

	list.append("One");
	list.append("Two");
	list.append("Three");
	
	let iter = list.getIterator();
	
	expect(iter.hasNext()).toBe(true);
	expect(iter.next()).toEqual("One");
	expect(iter.next()).toEqual("Two");
	expect(iter.next()).toEqual("Three");
	expect(iter.hasNext()).toBe(false);
	
});
