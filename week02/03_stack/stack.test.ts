import {expect, test} from '@jest/globals';

import { Stack } from './stack'

test("constructing stack", () => {
	let list = new Stack<number>();
	expect(list).toBeDefined();
})

test("root of the stack is null", () => {
	let list = new Stack();
	let rootObj = list.peek();
	expect(rootObj).toBeNull();
})

test("linkedlist pushto root", () => {
	let list = new Stack<number>();
	list.push(1);
	let rootObj = list.peek();
	expect(rootObj).not.toBeNull();
})

test("stack push and retrieve(0)", () => {
	let list = new Stack<number>();
	list.push(1);
	let rootObj = list.peek();
	expect(rootObj).toBeDefined();
	let objRetrieved = list.pop();
	expect(objRetrieved).toBe(1);
})

test("stack multiple-push and retrieve(1)", () => {
	let list = new Stack<number>();
	list.push(10);
	list.push(20);
	let rootObj = list.peek();
	expect(rootObj).toBeDefined();
	list.pop();
	let objRetrieved = list.pop();
	expect(objRetrieved).toBe(10);
})

test("stack multiple-push and retrieve(3)", () => {
	let list = new Stack<number>();
	list.push(10);
	list.push(20);
	list.push(30);
	list.push(40);
	list.push(50);
	let rootObj = list.peek();
	expect(rootObj).toBeDefined();
	list.pop();
	list.pop();
	list.pop();
	let objRetrieved = list.pop();
	expect(objRetrieved).toBe(20);
})


test("stack pushonce and pop(0)", () => {
	let list = new Stack<number>();
	list.push(10);
	let obj = list.pop();
	expect(obj).toBe(10);
})

test("stack multiple push and pop(1)", () => {
	let list = new Stack<number>();
	list.push(10);
	list.push(20);
	list.push(30);
	list.push(40);
	list.push(50);
	let obj = list.pop();
	expect(obj).toBe(50);
})

test("stack multiple push and pop(3)", () => {
	let list = new Stack<number>();
	list.push(10);
	list.push(20);
	list.push(30);
	list.push(40);
	list.push(50);
	list.pop();
	list.pop();
	let obj = list.pop();
	expect(obj).toBe(30);
})

test("stack check size() is 3", () => {
	let list = new Stack<number>();
	list.push(10);
	list.push(20);
	list.push(30);
	list.push(40);
	list.push(50);
	list.pop();
	list.pop();
	let obj = list.pop();
	expect(list.size()).toBe(2);
	expect(obj).toBe(30);
})


test("stack check size() is 0", () => {
	let list = new Stack<number>();
	expect(list.size()).toBe(0);
})


