import {expect, test} from '@jest/globals';

import { LinkedList } from './linkedlist'

test("constructing linkedlist", () => {
	let list = new LinkedList();
	expect(list).toBeDefined();
})

test("root of the linkedlist is null", () => {
	let list = new LinkedList();
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeNull();
})

test("linkedlist append to root", () => {
	let list = new LinkedList();
	list.append(1);
	let rootObj = list.retrieveRoot();
	expect(rootObj).not.toBeNull();
})

test("linkedlist append and retrieve(0)", () => {
	let list = new LinkedList();
	list.append(1);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	let objRetrieved = list.retrieve(0);
	expect(objRetrieved).toBe(1);
})

test("linkedlist multiple-append and retrieve(1)", () => {
	let list = new LinkedList();
	list.append(10);
	list.append(20);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	let objRetrieved = list.retrieve(1);
	expect(objRetrieved).toBe(20);
})

test("linkedlist multiple-append and retrieve(3)", () => {
	let list = new LinkedList();
	list.append(10);
	list.append(20);
	list.append(30);
	list.append(40);
	list.append(50);
	let rootObj = list.retrieveRoot();
	expect(rootObj).toBeDefined();
	let objRetrieved = list.retrieve(3);
	expect(objRetrieved).toBe(40);
})


test("linkedlist append once and remove(0)", () => {
	let list = new LinkedList();
	list.append(10);
	let obj = list.remove(0);
	expect(obj).toBe(10);
})

test("linkedlist multiple append and remove(1)", () => {
	let list = new LinkedList();
	list.append(10);
	list.append(20);
	list.append(30);
	list.append(40);
	list.append(50);
	let obj = list.remove(1);
	expect(obj).toBe(20);
})

test("linkedlist multiple append and remove(3)", () => {
	let list = new LinkedList();
	list.append(10);
	list.append(20);
	list.append(30);
	list.append(40);
	list.append(50);
	let obj = list.remove(3);
	expect(obj).toBe(40);
})


test("linkedlist check size() is 0", () => {
	let list = new LinkedList();
	expect(list.size()).toBe(0);
})


